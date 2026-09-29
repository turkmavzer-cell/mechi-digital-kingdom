import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mechi.plus',
  appName: 'MeChi +',
  webDir: 'dist',
  backgroundColor: '#050810',
  plugins: {
    SystemBars: { insetsHandling: 'css', style: 'DARK' },
  },
};

export default config;
