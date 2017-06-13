window.config = {
  bucket:         'BUCKET_NAME',
  folder_prefix:  'foldername/',
  role:           'IAM_ROLE',  // AWS role arn
  principal:      'SAML_ARN', // AWS saml provider arn
  domain:         'YOUR_DOAMIN.auth0.com',                // Auth0 domain
  clientID:       'YOUR_AUTH0_CLIENT_ID', // Auth0 app client id
  targetClientId: 'YOUR_AWS_API_CLIENT_ID' // Auth0 AWS API client id
};
