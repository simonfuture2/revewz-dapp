use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

solana_program::declare_id!("BpfProgram1111111111111111111111111111111111");

entrypoint!(process_instruction);
fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!(
        "process_instruction: {}: {} accounts, data={:?}",
        program_id,
        accounts.len(),
        instruction_data
    );
    Ok(())
}

fn get_or_create_associated_token_address(
    funding_address: &Pubkey, 
    wallet_address: &Pubkey,
    spl_token_mint_address: &Pubkey,
) -> Pubkey {
 let mut disaddress :Pubkey = get_associated_token_address!(wallet_address,spl_token_mint_address)
    if(disaddress)
    return disaddress
    else {
        disaddress =  create_associated_token_account(funding_address,wallet_address,spl_token_mint_address)
    }
}


/// create get associated token account
/// if it doesn't exist , create one
/// send token to new address
/// if exist send token to new address

#[cfg(test)]
mod test {
    use {
        super::*,
        assert_matches::*,
        solana_program::instruction::{AccountMeta, Instruction},
        solana_program_test::*,
        solana_sdk::{signature::Signer, transaction::Transaction},
    };

    #[tokio::test]
    async fn test_transaction() {
        let program_id = Pubkey::new_unique();

        let (mut banks_client, payer, recent_blockhash) = ProgramTest::new(
            "bpf_program_template",
            program_id,
            processor!(process_instruction),
        )
        .start()
        .await;

        let mut transaction = Transaction::new_with_payer(
            &[Instruction {
                program_id,
                accounts: vec![AccountMeta::new(payer.pubkey(), false)],
                data: vec![1, 2, 3],
            }],
            Some(&payer.pubkey()),
        );
        transaction.sign(&[&payer], recent_blockhash);

        assert_matches!(banks_client.process_transaction(transaction).await, Ok(()));
    }
}
