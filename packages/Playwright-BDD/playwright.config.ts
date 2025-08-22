import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/test/features/*.feature',
  steps:[
    'src/test/steps/*.ts',
    'src/fixtures/my-fixtures.ts',
    'src/test/hooks/hooks.ts'
  ]
});

export default defineConfig({
  testDir,
  reporter: [['html',{open:'never'}]],
  use:{
    screenshot :'only-on-failure',
    video: 'retain-on-failure'
  }
});
