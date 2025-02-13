import { NextRequest, NextResponse }  from 'next/server';



async function GET(request: NextRequest, { params }: { params: Promise<{ [key: string]: string }> }): Promise<NextResponse> {
  try {
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
  timestamp: new Date().toISOString()
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


export default GET;
