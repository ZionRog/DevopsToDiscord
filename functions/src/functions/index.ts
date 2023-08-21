import * as functions from "firebase-functions";
import {
  sendPullRequestCreated,
  sendWorkItemCreatedToDiscord,
  sendWorkItemUpdatedToDiscord,
  sendWorkItemCommentedOn,
  sendPullRequestCommentedOn,
  sendPullRequestMergeAttempt,
  sendPullRequestUpdated,
} from "../sendToDiscord";

export const devOpsToDiscord = functions.https.onRequest(
  async (request, response) => {
    functions.logger.log(
      `Http function processed request for url "${request.url}"`
    );

    const devopsPayload = JSON.parse(await streamToString(request.rawBody));

    let discordResponse;

    switch (devopsPayload?.eventType) {
      case "git.pullrequest.updated":
      case "git.pullrequest.created":
        const messageText = devopsPayload?.message?.text || "";
        if (messageText.includes("created pull request")) {
          discordResponse = await sendPullRequestCreated(devopsPayload);
        } else if (messageText.includes("updated the source branch")) {
          discordResponse = await sendPullRequestUpdated(devopsPayload);
        }
        break;
      case "ms.vss-code.git-pullrequest-comment-event":
        discordResponse = await sendPullRequestCommentedOn(devopsPayload);
        break;
      case "git.pullrequest.merged":
        discordResponse = await sendPullRequestMergeAttempt(devopsPayload);
        break;
      case "workitem.created":
        discordResponse = await sendWorkItemCreatedToDiscord(devopsPayload);
        break;
      case "workitem.updated":
        discordResponse = await sendWorkItemUpdatedToDiscord(devopsPayload);
        break;
      case "workitem.commented":
        discordResponse = await sendWorkItemCommentedOn(devopsPayload);
        break;

      default:
        response.status(400).send("Invalid Request");
        return;
    }

    response.status(200).json({ discordResponse });
  }
);

async function streamToString(stream?: Buffer): Promise<string> {
  if (!stream) {
    return "{}";
  }
  return stream.toString("utf-8");
}
