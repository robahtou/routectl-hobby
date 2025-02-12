import { NextRequest, NextResponse }  from 'next/server';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({
  coerceTypes: true,
});
ajvFormats(ajv);

const POSTRequestBodySchema = {"type":"object","properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","description":"User Status","format":"int32"}}};
const validatePostRequestBody = ajv.compile(POSTRequestBodySchema);


async function POST(request: NextRequest, { params }: { params: Promise<{ [key: string]: string }> }): Promise<NextResponse> {
  try {
let requestBody;

    try {
      requestBody = await request.json();
    } catch (error) {
      return NextResponse.json(
        { message: 'Invalid JSON format in request body' },
        { status: 400 }
      );
    }

    if (!requestBody || typeof requestBody !== 'object') {
      return NextResponse.json(
        { message: 'Request body must be a valid JSON object' },
        { status: 400 }
      );
    }

    if (!validatePostRequestBody(requestBody)) {
      return NextResponse.json({
        message: 'Invalid request body',
        errors: validatePostRequestBody.errors
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
const responsePayload = {
  id: 10,
  username: 'theUser',
  firstName: 'John',
  lastName: 'James',
  email: 'john@email.com',
  password: '12345',
  phone: '12345',
  userStatus: 1,
};


return NextResponse.json(responsePayload, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}


export default POST;
