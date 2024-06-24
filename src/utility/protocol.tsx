export default async function API(url, method, data) {
  switch (method) {
    case 'POST': {
      await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      });
    }
  }
}
