import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_f6IgXkW3E',
    ClientId: '166175858ndssb8l1gg7chpi67'
}

export default new CognitoUserPool(poolData);