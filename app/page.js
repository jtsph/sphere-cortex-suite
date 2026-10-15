export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Sustainable Software Development Suite</h1>
      <p>Deployed via cortex.thesphere.online on Vercel.</p>
      <h2>Integrations</h2>
      <ul>
        <li><strong>Vercel</strong>: Hosting and deployment</li>
        <li><strong>ChatGPT</strong>: AI assistance (OpenAI API)</li>
        <li><strong>MetaMask / WalletConnect</strong>: Web3 wallet for BNB and other chains</li>
        <li><strong>Payments</strong>: Lloyds Bank, Revolut, Apple Pay, Visa, Mastercard, Direct Debits (via compliant providers like Stripe, GoCardless, Open Banking)</li>
      </ul>
      <p>This is a foundational deployment. Real integrations require API keys, compliance (PCI-DSS, KYC), and merchant accounts.</p>
      <p><em>Sustainable: Efficient code, green hosting considerations, long-term maintainability.</em></p>
    </main>
  );
}