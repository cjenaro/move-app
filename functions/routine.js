const faunadb = require("faunadb");
const q = faunadb.query;

exports.handler = async function (event, context) {
  const adminClient = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });

  const { id } = event.queryStringParameters;

  if (!id) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Esa rutina no existe",
      }),
    };
  }

  return adminClient
    .query(
      q.Let(
        {
          routine: q.Get(q.Ref(q.Collection("routines"), id)),
          blocks: q.Map(
            q.Select(["data", "blocks"], q.Var("routine")),
            q.Lambda(
              "blockRef",
              q.Let(
                {
                  block: q.Get(
                    q.Ref(q.Collection("blocks"), q.Var("blockRef"))
                  ),
                  exercises: q.Map(
                    q.Select(["data", "exercises"], q.Var("block")),
                    q.Lambda(
                      "exerciseObj",
                      q.Get(
                        q.Ref(
                          q.Collection("exercises"),
                          q.Select(["exercise"], q.Var("exerciseObj"))
                        )
                      )
                    )
                  ),
                },
                {
                  block: q.Var("block"),
                  exercises: q.Var("exercises"),
                }
              )
            )
          ),
        },
        {
          routine: q.Var("routine"),
          blocks: q.Var("blocks"),
        }
      )
    )
    .then((ret) => ({
      statusCode: 200,
      body: JSON.stringify(ret),
    }))
    .catch((err) => ({
      statusCode: err.requestResult.statusCode,
      body: JSON.stringify({ message: err.description }),
    }));
};
