<template>
  <div class="privacy-policy-container">
    <nav>
      <div class="nav-logo">
        <span class="bracket">[</span><span class="at">@</span
        ><span class="name">gethoopp</span
        ><span class="bracket">]</span>
      </div>
      <router-link to="/" class="nav-back">← Back</router-link>
    </nav>

    <div class="privacy-policy-content" v-html="policyContent"></div>
  </div>
</template>

<script setup>
const policyContent = `
  <strong>Privacy Policy</strong>
  <p>This privacy policy applies to the PolyRun app for mobile devices, together with any related services operated by Haliim Pamungkas (collectively, the "Application"). Haliim Pamungkas is hereby referred to as the "Service Provider".</p>

  <strong>Information Collection and Use</strong>
  <p>The Application collects information when you download and use it. This information may include information such as:</p>
  <ul>
    <li>Your device's Internet Protocol address</li>
    <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
    <li>The time spent on the Application</li>
    <li>your mobile operating system you use</li>
  </ul>

  <strong>Cookies and tracking technologies</strong>
  <p>The Application or its third-party SDKs may use cookies, SDKs, pixels, and similar technologies to support functionality, analytics, or service delivery. Where required by applicable law, the Service Provider will obtain consent before using non-essential tracking technologies.</p>

  <strong>Your Rights</strong>
  <p>You may request access to, correction of, or deletion of your personal data held by the Service Provider. To exercise these rights, or to withdraw consent where processing is based on consent, contact the Service Provider at halimpamungkas9@gmail.com.</p>

  <strong>Your California privacy rights (CCPA/CPRA)</strong>
  <p>If you are a California resident, you have the right to know what personal information is collected, the right to delete personal information, the right to opt out of the sale or sharing of personal information, and the right to non-discrimination for exercising these rights. To exercise your CCPA/CPRA rights, contact the Service Provider at halimpamungkas9@gmail.com.</p>

  <p>The Service Provider may use the information you provide to send important information, required notices, and, where permitted by law, marketing communications.</p>

  <p>For a better experience while using the Application, the Service Provider may require you to provide certain personally identifiable information, including but not limited to halimpamungkas9@gmail.com. The information the Service Provider requests will be retained and used as described in this privacy policy.</p>

  <strong>Third Party Access</strong>
  <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>

  <strong>International Data Transfers</strong>
  <p>The Service Provider or its third-party service providers may transfer personal data to countries outside your country of residence, including outside the European Economic Area (EEA). Where applicable law requires safeguards for international transfers, the Service Provider will use appropriate mechanisms.</p>
  <ul>
    <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
    <li>Adequacy decisions or other legally recognized transfer mechanisms</li>
    <li>Your consent, where required and legally permitted</li>
  </ul>

  <p>Data protection laws in other countries may differ from those in your jurisdiction. Where required by law, the Service Provider will apply appropriate safeguards and obtain any consent required for the transfer.</p>

  <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
  <ul>
    <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
    <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
    <li>with their trusted services providers who work on their behalf, do not have an independent use of the information the Service Provider discloses to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
  </ul>

  <strong>Opt-Out Rights</strong>
  <p>You can stop further collection of information from your mobile device by uninstalling the Application. Uninstalling will stop the Application from collecting data from your device, but it does not automatically delete information that has already been transmitted to the Service Provider or to third parties.</p>

  <p>To request deletion of your personal data, to withdraw consent, or to exercise any of your rights, contact the Service Provider at halimpamungkas9@gmail.com.</p>

  <strong>Data Retention Policy</strong>
  <p>The Service Provider retains personal data based on its necessity for the stated purposes:</p>
  <ul>
    <li>User Provided Data: Retained for the duration of your use of the Application plus 12 months thereafter, unless longer retention is required by law</li>
    <li>Automatically Collected Data: Retained for up to 24 months from collection, unless longer retention is required for legal compliance</li>
    <li>Aggregated and Anonymized Data: Retained indefinitely as it no longer identifies you</li>
    <li>Data required for legal compliance: Retained as long as required by applicable law</li>
  </ul>

  <p>You may request deletion of your personal data, subject to any legal obligation to retain it. If you want the Service Provider to delete User Provided Data submitted through the Application, please contact them at halimpamungkas9@gmail.com. Please note that some User Provided Data may be required for the Application to function properly.</p>

  <strong>Children</strong>
  <p>The Application is not intended for children under 13 years of age, or such higher age as required by applicable law. The Service Provider does not knowingly solicit data from children or market the Application to them.</p>

  <p>The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourages parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (halimpamungkas9@gmail.com) so that they will be able to take the necessary actions. If you are under 13 years of age, your parent or guardian must provide consent on your behalf where permitted by law.</p>

  <strong>Security</strong>
  <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>

  <strong>Data Breach Notification</strong>
  <p>If a data breach occurs that affects your personal data, the Service Provider will notify you in accordance with applicable legal requirements, including, where required, providing information about the nature of the breach and the steps being taken to address it.</p>

  <strong>Changes</strong>
  <p>The Service Provider may update this Privacy Policy from time to time. The Service Provider will notify you of material changes by posting the updated Privacy Policy with an effective date. Where required by law, the Service Provider will seek your consent to material changes before they take effect.</p>

  <p>Previous versions of this Privacy Policy will be maintained and made available upon request by contacting the Service Provider at halimpamungkas9@gmail.com.</p>

  <p>This privacy policy is effective as of 2026-05-26</p>

  <strong>Your Consent</strong>
  <p>Where processing is based on consent, you provide that consent by affirmatively opting in to the relevant feature or action. You may withdraw consent at any time without affecting processing carried out before withdrawal. Processing based on other lawful bases is carried out as described above.</p>

  <strong>Contact Us</strong>
  <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at halimpamungkas9@gmail.com.</p>

  <hr>

  <p>This privacy policy page was generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a></p>
`;
</script>

<style scoped>
:root {
  --bg: #1a1b27;
  --bg2: #13141e;
  --bg3: #0f1018;
  --surface: #1e1f2e;
  --surface2: #252638;
  --border: rgba(122, 162, 247, 0.12);
  --blue: #7aa2f7;
  --blue-dim: #414868;
  --teal: #7dcfff;
  --green: #9ece6a;
  --orange: #ff9e64;
  --red: #f7768e;
  --purple: #bb9af7;
  --yellow: #e0af68;
  --text: #c0caf5;
  --muted: #565f89;
  --comment: #9aa5ce;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.privacy-policy-container {
  background: var(--bg3);
  color: var(--text);
  font-family: "DM Sans", sans-serif;
  min-height: 100vh;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 72px;
  background: rgba(15, 16, 24, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-logo {
  font-family: "DM Mono", monospace;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-logo .bracket {
  color: var(--muted);
}

.nav-logo .name {
  color: var(--blue);
}

.nav-logo .at {
  color: var(--green);
}

.nav-back {
  color: var(--blue);
  text-decoration: none;
  font-family: "DM Mono", monospace;
  font-size: 0.83rem;
  cursor: pointer;
  transition: color 0.2s;
}

.nav-back:hover {
  color: var(--teal);
}

.privacy-policy-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 72px 60px;
  font-size: 0.95rem;
  line-height: 1.8;
}

.privacy-policy-content :deep(strong) {
  color: var(--blue);
  display: block;
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.privacy-policy-content :deep(p) {
  margin-bottom: 12px;
  color: var(--comment);
}

.privacy-policy-content :deep(ul) {
  margin-left: 24px;
  margin-bottom: 12px;
}

.privacy-policy-content :deep(li) {
  margin-bottom: 6px;
  color: var(--comment);
}

.privacy-policy-content :deep(hr) {
  margin: 24px 0;
  border: none;
  border-top: 1px solid var(--border);
}

.privacy-policy-content :deep(a) {
  color: var(--blue);
  text-decoration: none;
}

.privacy-policy-content :deep(a:hover) {
  text-decoration: underline;
}

@media (max-width: 900px) {
  nav {
    padding: 14px 20px;
  }

  .privacy-policy-content {
    padding: 80px 20px 40px;
  }
}
</style>