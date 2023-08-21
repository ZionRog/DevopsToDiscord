export interface WorkItemCommentedOnPayload {
  subscriptionId: string;
  notificationId: number;
  id: string;
  eventType: string;
  publisherId: string;
  message: {
    text: string;
    html: string;
    markdown: string;
  };
  detailedMessage: {
    text: string;
    html: string;
    markdown: string;
  };
  resource: {
    id: number;
    rev: number;
    fields: {
      "System.AreaPath": string;
      "System.TeamProject": string;
      "System.IterationPath": string;
      "System.WorkItemType": string;
      "System.State": string;
      "System.Reason": string;
      "System.CreatedDate": string;
      "System.CreatedBy": {
        displayName: string;
        url: string;
        _links: {
          avatar: {
            href: string;
          };
        };
        id: string;
        uniqueName: string;
        imageUrl: string;
        descriptor: string;
      };
      "System.ChangedDate": string;
      "System.ChangedBy": {
        displayName: string;
        url: string;
        _links: {
          avatar: {
            href: string;
          };
        };
        id: string;
        uniqueName: string;
        imageUrl: string;
        descriptor: string;
      };
      "System.Title": string;
      "Microsoft.VSTS.Common.Severity": string;
      "WEF_EB329F44FE5F4A94ACB1DA153FDF38BA_Kanban.Column": string;
      "System.History": string;
    };
    _links: {
      self: {
        href: string;
      };
      workItemUpdates: {
        href: string;
      };
      workItemRevisions: {
        href: string;
      };
      workItemType: {
        href: string;
      };
      fields: {
        href: string;
      };
    };
    url: string;
  };
  resourceVersion: string;
  resourceContainers: {
    collection: {
      id: string;
    };
    account: {
      id: string;
    };
    project: {
      id: string;
    };
  };
  createdDate: string;
}
