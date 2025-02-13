import { NextRequest, NextResponse }  from 'next/server';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({
  coerceTypes: true
});
ajvFormats(ajv);

const DELETEPathParametersSchema = {"type":"object","properties":{"orderId":{"type":"integer","format":"int64"}},"required":["orderId"],"additionalProperties":false};
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
return NextResponse.json('hola amigos!', { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}


export default DELETE;
