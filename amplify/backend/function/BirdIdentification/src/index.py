import json

def handler(event, context):
    print('[Backend] Received event:')
    print(event)

    print('[Backend] Headers:', event.get('headers'))

    body = event.get('body')
    print(f'[Backend] Body length: {len(body) if body else 0}')

    # Handle CORS preflight request (OPTIONS)
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'message': 'CORS preflight'})
        }

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            'Content-Type': 'application/json'
        },
        'body': json.dumps({
            'species': [
                {
                    'name': 'American Robin',
                    'confidence': 0.95,
                    'image': 'https://example.com/robin.jpg'
                },
            ]
        })
    }
