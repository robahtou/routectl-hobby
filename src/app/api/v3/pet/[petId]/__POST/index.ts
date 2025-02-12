import { NextRequest, NextResponse }  from 'next/server';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({
  coerceTypes: true,
});
ajvFormats(ajv);

const POSTPathParametersSchema = {"type":"object","properties":{"petId":{"type":"integer","format":"int64"}},"required":["petId"],"additionalProperties":false};
const POSTQueryParametersSchema = {"type":"object","properties":{"name":{"type":"string"},"status":{"type":"string"}},"required":[],"additionalProperties":false};
const validatePostPathParameters = ajv.compile(POSTPathParametersSchema);
const validatePostQueryParameters = ajv.compile(POSTQueryParametersSchema);


async function POST(request: NextRequest, { params }: { params: Promise<{ [key: string]: string }> }): Promise<NextResponse> {
  try {
const pathParameters = await params;
const queryParameters = Object.fromEntries(request.nextUrl.searchParams.entries());
if (!validatePostPathParameters(pathParameters)) {
      return NextResponse.json({
        message: 'Invalid path parameters',
        errors: validatePostPathParameters.errors
      }, { status: 400 });
    }
if (!validatePostQueryParameters(queryParameters)) {
      return NextResponse.json({
        message: 'Invalid query parameters',
        errors: validatePostQueryParameters.errors
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
  pathParameters: pathParameters,
  queryParameters: queryParameters
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


export default POST;
