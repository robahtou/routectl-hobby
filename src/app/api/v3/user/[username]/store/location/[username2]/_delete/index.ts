import { NextRequest, NextResponse }  from 'next/server';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({
  coerceTypes: true
});
ajvFormats(ajv);

const DELETEPathParametersSchema = {"type":"object","properties":{"username":{"type":"string"},"username2":{"type":"string"}},"required":["username","username2"],"additionalProperties":false};
const validateDeletePathParameters = ajv.compile(DELETEPathParametersSchema);


async function DELETE(request: NextRequest, { params }: { params: Promise<{ [key: string]: string }> }): Promise<NextResponse> {
  try {
const pathParameters = await params;
if (!validateDeletePathParameters(pathParameters)) {
      return NextResponse.json({
        message: 'Invalid path parameters',
        errors: validateDeletePathParameters.errors
      }, { status: 400 });
    }
/*
      =========================================================
          AUTO-GENERATED: DO NOT REMOVE/MODIFY THIS MESSAGE
               DO NOT MODIFY ANYTHING ABOVE THIS BLOCK
      =========================================================
    */

// ADD YOUR CODE BETWEEN THE BOUNDARY COMMENTS
/*
      =========================================================
          AUTO-GENERATED: DO NOT REMOVE/MODIFY THIS MESSAGE
               DO NOT MODIFY ANYTHING BELOW THIS BLOCK
      =========================================================
    */
const echoRequest = {
    requestUrl: request.url,
  method: request.method,
  timestamp: new Date().toISOString(),
  pathParameters: pathParameters
  };

      return NextResponse.json(echoRequest, { status: 200 });
  

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}


export default DELETE;
