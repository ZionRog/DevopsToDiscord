import axios from "axios";
import { EmbedBuilder } from "discord.js";
import { WorkItemCreatedPayload } from "./workItemCreatedPayload";
import { PullRequestPayload } from "./pullRequestCreatedPayload";
import { WorkItemUpdatedPayload } from "./workItemUpdatedPayload";
import { WorkItemCommentedOnPayload } from "./workItemCommentedOnPayload";
import { PullRequestCommentedOnPayload } from "./pullRequestCommentedOnPayload";
import { PullRequestUpdatedPayload } from "./pullRequestUpdatedPayload";
import { env } from "../environment/env";

export async function sendWorkItemCreatedToDiscord(
  workItemCreatedPayload: WorkItemCreatedPayload
) {
  const authorName = workItemCreatedPayload.resource.fields["System.CreatedBy"];
  const name = authorName.split("<")[0].trim();

  const discordEmbed = new EmbedBuilder()
    .setColor("Blue")
    .setTitle(workItemCreatedPayload.resource.fields["System.Title"])
    .setURL(workItemCreatedPayload.resource._links.self.href)
    .setAuthor({
      name: name,
      iconURL: "https://i.imgur.com/qRBfy9e.png",
    })
    .setDescription(
      `Story # ${workItemCreatedPayload.resource.id}, Revised ${workItemCreatedPayload.resource.rev} times`
    )
    .setThumbnail(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEZO8aDrkdhr_PhUJ1zh9KnFlIJKscJ9-NA&usqp=CAU"
    )
    .addFields(
      { name: "What was changed?", value: workItemCreatedPayload.message.text },
      { name: "\u200B", value: "\u200B" },
      {
        name: "State",
        value: workItemCreatedPayload.resource.fields["System.State"],
        inline: true,
      },
      {
        name: "Repository",
        value: workItemCreatedPayload.resource.fields["System.AreaPath"],
        inline: true,
      }
    )
    .addFields({
      name: "Item Type",
      value: workItemCreatedPayload.resource.fields["System.WorkItemType"],
      inline: true,
    })

    .setTimestamp();
  try {
    await axios.post(env.sc, {
      content: "",
      embeds: [discordEmbed.toJSON()],
    });
    console.log("Message sent to Discord");
    return { body: "Message sent to discord", status: 200 };
  } catch (error) {
    console.error("Failed to send message to Discord");
    return { body: "Message not sent to discord", status: 400 };
  }
}

export async function sendWorkItemUpdatedToDiscord(
  workItemUpdatedPayload: WorkItemUpdatedPayload
) {
  const discordEmbed = new EmbedBuilder()
    .setColor("DarkAqua")
    .setTitle(workItemUpdatedPayload.resource.revision.fields["System.Title"])

    .setURL(workItemUpdatedPayload.resource._links.html.href)
    .setAuthor({
      name: workItemUpdatedPayload.resource.revisedBy.displayName,
      iconURL: "https://i.imgur.com/qRBfy9e.png",
    })
    .setDescription(
      `Story # ${workItemUpdatedPayload.resource.revision.id}, Revised ${workItemUpdatedPayload.resource.revision.rev} times`
    )
    .setThumbnail(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6xuvTi0cZ67HGJA_NTB_RHrfTjog1o7o87vNU7dP9A&usqp=CAU&ec=48665698"
    )
    .addFields(
      { name: "What was changed?", value: workItemUpdatedPayload.message.text },
      { name: "\u200B", value: "\u200B" },
      {
        name: "State",
        value: workItemUpdatedPayload.resource.revision.fields["System.State"],
        inline: true,
      },
      {
        name: "Repository",
        value:
          workItemUpdatedPayload.resource.revision.fields["System.AreaPath"],
        inline: true,
      }
    )
    .addFields({
      name: "Item Type",
      value:
        workItemUpdatedPayload.resource.revision.fields["System.WorkItemType"],
      inline: true,
    })

    .setTimestamp();

  try {
    await axios.post(env.sc, {
      content: "",
      embeds: [discordEmbed.toJSON()],
    });
    console.log("Message sent to Discord");
    return { body: "Message sent to discord", status: 200 };
  } catch (error) {
    console.error("Failed to send message to Discord");
    return { body: "Message not sent to discord", status: 400 };
  }
}
export async function sendWorkItemCommentedOn(
  workItemCommentedOn: WorkItemCommentedOnPayload
) {
  const discordEmbed = new EmbedBuilder()
    .setColor("Red")
    .setTitle(workItemCommentedOn.resource.fields["System.Title"])

    .setURL(workItemCommentedOn.resource._links.self.href)
    .setAuthor({
      name: workItemCommentedOn.resource.fields["System.CreatedBy"].displayName,
      iconURL: "https://i.imgur.com/qRBfy9e.png",
    })
    .setDescription(
      `Story # ${workItemCommentedOn.resource.id}, Revised ${workItemCommentedOn.resource.rev} times`
    )
    .setThumbnail(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPwI0i6vM1Dfup9QZWoTBkX3m9DaFXlN9wA&usqp=CAU"
    )
    .addFields(
      { name: "What was changed?", value: workItemCommentedOn.message.text },
      { name: "\u200B", value: "\u200B" },
      {
        name: "State",
        value: workItemCommentedOn.resource.fields["System.State"],
        inline: true,
      },
      {
        name: "Repository",
        value: workItemCommentedOn.resource.fields["System.AreaPath"],
        inline: true,
      }
    )
    .addFields({
      name: "Item Type",
      value: workItemCommentedOn.resource.fields["System.WorkItemType"],
      inline: true,
    })

    .setTimestamp();
  try {
    await axios.post(env.sc, {
      content: "",
      embeds: [discordEmbed.toJSON()],
    });
    console.log("Message sent to Discord");
    return { body: "Message sent to discord", status: 200 };
  } catch (error) {
    console.error("Failed to send message to Discord");
    return { body: "Message not sent to discord", status: 400 };
  }
}

export async function sendPullRequestCreated(
  pullRequestPayload: PullRequestPayload
) {
  const discordEmbed = new EmbedBuilder()
    .setTitle(pullRequestPayload.resource.title)
    .setColor("Red")
    .setURL(pullRequestPayload.resource.reviewers[0].reviewerUrl)
    .setAuthor({
      name: `${pullRequestPayload.resource.createdBy.displayName} created a Pull Request # ${pullRequestPayload.resource.pullRequestId}`,
      iconURL: "https://i.imgur.com/qRBfy9e.png",
    })
    .setThumbnail(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVte_O2T3NYbEnVuaZwQibWY5JWKDXxM1vpAawqxg4Mg&s"
    )
    .setDescription(pullRequestPayload.message.markdown)
    .setTimestamp();

  try {
    await axios.post(env.prc, {
      embeds: [discordEmbed.toJSON()],
    });
    console.log("Message sent to Discord");
    return { body: "Message sent to Discord", status: 200 };
  } catch (error) {
    console.error("Failed to send message to Discord");
    return { body: "Message not sent to Discord", status: 400 };
  }
}

export async function sendPullRequestCommentedOn(
  pullRequestCommentedOnPayload: PullRequestCommentedOnPayload
) {
  const discordEmbed = new EmbedBuilder()
    .setTitle(pullRequestCommentedOnPayload.resource.pullRequest.title)
    .setColor("Blue")
    .setAuthor({
      name: `${pullRequestCommentedOnPayload.resource.pullRequest.createdBy.displayName} has commented on pull request ${pullRequestCommentedOnPayload.resource.pullRequest.pullRequestId}`,
      iconURL: "https://i.imgur.com/qRBfy9e.png",
    })
    .setDescription(pullRequestCommentedOnPayload.message.markdown)
    .setThumbnail(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPwI0i6vM1Dfup9QZWoTBkX3m9DaFXlN9wA&usqp=CAU"
    )
    .addFields({
      name: "Comment:",
      value: `${pullRequestCommentedOnPayload.resource.comment.content}`,
      inline: true,
    })
    .setTimestamp();
  try {
    await axios.post(env.prc, {
      embeds: [discordEmbed.toJSON()],
    });
    console.log("Message sent to Discord");
    return { body: "Message sent to Discord", status: 200 };
  } catch (error) {
    console.error("Failed to send message to Discord");
    return { body: "Message not sent to Discord", status: 400 };
  }
}

export async function sendPullRequestMergeAttempt(
  pullRequestMergedPayload: PullRequestMergedPayload
) {
  const discordEmbed = new EmbedBuilder()
    .setTitle(pullRequestMergedPayload.resource.title)
    .setColor("Red")
    .setAuthor({
      name: `${pullRequestMergedPayload.resource.createdBy.displayName} has attempted to merge pr ${pullRequestMergedPayload.resource.pullRequestId}`,
      iconURL: "https://i.imgur.com/qRBfy9e.png",
    })
    .setDescription(pullRequestMergedPayload.message.markdown)
    .setTimestamp();
  try {
    await axios.post(env.prc, {
      embeds: [discordEmbed.toJSON()],
    });
    console.log("Message sent to Discord");
    return { body: "Message sent to Discord", status: 200 };
  } catch (error) {
    console.error("Failed to send message to Discord");
    return { body: "Message not sent to Discord", status: 400 };
  }
}
export async function sendPullRequestUpdated(
  pullRequestUpdated: PullRequestUpdatedPayload
) {
  const discordEmbed = new EmbedBuilder()
    .setTitle(pullRequestUpdated.resource.title)
    .setColor("Green")
    .setAuthor({
      name: `${pullRequestUpdated.resource.createdBy.displayName} has updated the push for pr  ${pullRequestUpdated.resource.pullRequestId}`,
      iconURL: "https://i.imgur.com/qRBfy9e.png",
    })
    .setDescription(pullRequestUpdated.message.markdown)
    .setTimestamp();
  try {
    await axios.post(env.prc, {
      embeds: [discordEmbed.toJSON()],
    });
    console.log("Message sent to Discord");
    return { body: "Message sent to Discord", status: 200 };
  } catch (error) {
    console.error("Failed to send message to Discord");
    return { body: "Message not sent to Discord", status: 400 };
  }
}
