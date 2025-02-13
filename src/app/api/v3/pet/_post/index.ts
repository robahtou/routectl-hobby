import { NextRequest, NextResponse }  from 'next/server';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({
  coerceTypes: true
});
ajvFormats(ajv);

const POSTRequestBodySchema = {"required":["name","photoUrls"],"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"},"category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}}},"photoUrls":{"type":"array","items":{"type":"string"}},"tags":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}}}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}}};
const validatePostRequestBody = ajv.compile(POSTRequestBodySchema);


async function POST(request: NextRequest, { params }: { params: Promise<{ [key: string]: string }> }): Promise<NextResponse> {
  try {
let requestBody;

    try {
      requestBody = await request.json();
    } catch (error) {
      requestBody = {};
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


export default POST;
