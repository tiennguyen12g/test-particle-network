import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthType } from '@particle-network/auth-core';
import { EthereumSepolia } from '@particle-network/chains';
import { AuthCoreContextProvider, PromptSettingType } from '@particle-network/auth-core-modal';
import App from './App'

import('buffer').then(({ Buffer }) => {
  window.Buffer = Buffer;
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthCoreContextProvider
      options={{
        projectId: "ac09f402-9d5e-4ce5-ad31-110abe346da7",
        clientKey: "cEra5wlpo89AIq2hMsGdnz0R1PkGNU9dyyHcpGUE",
        appId: "76e18756-26da-4258-9f02-bb206f3e6bf8",
        authTypes: [AuthType.email, AuthType.google, AuthType.twitter],
        themeType: 'dark',
        fiatCoin: 'USD',
        language: 'en',
        erc4337: {
          name: 'SIMPLE',
          version: '1.0.0',
        },
        promptSettingConfig: {
          promptPaymentPasswordSettingWhenSign: PromptSettingType.first,
          promptMasterPasswordSettingWhenLogin: PromptSettingType.first,
        },
        wallet: {
          visible: true,
          customStyle: {
            supportChains: [EthereumSepolia],
          }
        },
      }}
    >
    <App />
      </AuthCoreContextProvider>
  </React.StrictMode>
)