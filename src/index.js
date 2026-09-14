export default {
  async fetch() {
    return new Response("ways-worker-fixture ok", {
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
