import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportpbApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportpbApi';

        displayName = 'Apisetu Gov Transportpb API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportpb/apisetu-gov-transportpb.svg', dark: 'file:../nodes/ApisetuGovTransportpb/apisetu-gov-transportpb.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportpb/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportpb/v3',
                        description: 'The base URL of your Apisetu Gov Transportpb API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
