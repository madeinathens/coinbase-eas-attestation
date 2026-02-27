const { EAS } = require('@ethereum-attestation-service/eas-sdk');
const { ethers } = require('ethers');

// Συνάρτηση για generate hash
function generate_hash(data) {
    return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(data));
}

// Το κυρίως function
async function main() {
    // Προσομοίωση του coinbase_payment_status
    const coinbase_payment_status = 'COMPLETED';
    
    if (coinbase_payment_status === 'COMPLETED') {
        const payment_id = 'PAYMENT_' + Date.now();
        const timestamp = Date.now().toString();
        
        const newMerkleLeaf = generate_hash(payment_id + timestamp);
        const worth = '1618000000000000000'; // 1.618 Golden Ratio
        
        console.log('Payment completed! Creating attestation...');
        console.log('Merkle Leaf:', newMerkleLeaf);
        console.log('Worth:', worth);
        
        // Εδώ θα μπει η σύνδεση με το Base EAS
        // Θα χρειαστείς private key και RPC URL
        
        /* 
        // Αποσχολιασμός όταν έχεις τα credentials
        const provider = new ethers.providers.JsonRpcProvider('YOUR_BASE_RPC_URL');
        const signer = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
        const eas = new EAS('0xEAS_CONTRACT_ADDRESS_ON_BASE');
        eas.connect(signer);
        
        await eas.attest({
            schema: "0x36f7235ee78d5f4fec42c8b5079bbccaff629704414637afdf03c387ff1815e3",
            data: { 
                merkleLeaf: newMerkleLeaf, 
                worth: worth, 
                eventName: "Lil Orbits - Automated Bite" 
            }
        });
        */
    }
}

// Εκτέλεση
main().catch(console.error);
