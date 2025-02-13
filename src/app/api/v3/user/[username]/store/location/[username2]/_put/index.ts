import { NextRequest, NextResponse }  from 'next/server';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({
  coerceTypes: true
});
ajvFormats(ajv);

const PUTPathParametersSchema = {"type":"object","properties":{"username":{"type":"string"},"username2":{"type":"string"}},"required":["username","username2"],"additionalProperties":false};
const PUTRequestBodySchema = {"type":"object","properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","description":"User Status","format":"int32"}}};
const validatePutPathParameters = ajv.compile(PUTPathParametersSchema);
const validatePutRequestBody = ajv.compile(PUTRequestBodySchema);


async function PUT(request: NextRequest, { params }: { params: Promise<{ [key: string]: string }> }): Promise<NextResponse> {
  try {
const pathParameters = await params;
let requestBody;
if (!validatePutPathParameters(pathParameters)) {
      return NextResponse.json({
        message: 'Invalid path parameters',
        errors: validatePutPathParameters.errors
      }, { status: 400 });
    }

    try {
      requestBody = await request.json();
    } catch (error) {
      requestBody = {};
    }

    if (!validatePutRequestBody(requestBody)) {
      return NextResponse.json({
        message: 'Invalid request body',
        errors: validatePutRequestBody.errors
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
return NextResponse.json('hola amigos!', { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}


export default PUT;
