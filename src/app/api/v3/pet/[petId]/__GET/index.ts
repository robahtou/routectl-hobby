import { NextRequest, NextResponse }  from 'next/server';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({
  coerceTypes: true,
});
ajvFormats(ajv);

const GETPathParametersSchema = {"type":"object","properties":{"petId":{"type":"integer","format":"int64"}},"required":["petId"],"additionalProperties":false};
const validateGetPathParameters = ajv.compile(GETPathParametersSchema);


async function GET(request: NextRequest, { params }: { params: Promise<{ [key: string]: string }> }): Promise<NextResponse> {
  try {
const pathParameters = await params;
if (!validateGetPathParameters(pathParameters)) {
      return NextResponse.json({
        message: 'Invalid path parameters',
        errors: validateGetPathParameters.errors
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
  name: 'charlie',
  photoUrls: ['https://example.com/dog1.jpg', 'https://example.com/dog2.jpg'],
  id: 10,
  category: { id: 1, name: 'charlie' },
  tags: [{ id: 0, name: 'charlie' }],
  status: 'example',
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


export default GET;
