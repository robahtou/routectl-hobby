import { NextRequest, NextResponse }  from 'next/server';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({
  coerceTypes: true
});
ajvFormats(ajv);

const GETQueryParametersSchema = {"type":"object","properties":{"status":{"type":"string","default":"available","enum":["available","pending","sold"]}},"required":[],"additionalProperties":false};
const validateGetQueryParameters = ajv.compile(GETQueryParametersSchema);


async function GET(request: NextRequest, { params }: { params: Promise<{ [key: string]: string }> }): Promise<NextResponse> {
  try {
const queryParameters = Object.fromEntries(request.nextUrl.searchParams.entries());
if (!validateGetQueryParameters(queryParameters)) {
      return NextResponse.json({
        message: 'Invalid query parameters',
        errors: validateGetQueryParameters.errors
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



  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}


export default GET;
