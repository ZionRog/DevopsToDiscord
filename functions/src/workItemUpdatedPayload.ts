export interface WorkItemUpdatedPayload {
  subscriptionId: "string";
  notificationId: "number";
  id: "string";
  eventType: "string";
  publisherId: "string";
  message: {
    text: "string";
    html: "string";
    markdown: "string";
  };
  detailedMessage: {
    text: "string";
    html: "string";
    markdown: "string";
  };
  resource: {
    id: "number";
    workItemId: "number";
    rev: "number";
    revisedBy: {
      id: "string";
      displayName: "string";
      url: "string";
      _links: {
        avatar: {
          href: "string";
        };
      };
      uniqueName: "string";
      imageUrl: "string";
      descriptor: "string";
    };
    revisedDate: "string";
    fields: {
      "System.Rev": {
        oldValue: "string";
        newValue: "string";
      };
      "System.AuthorizedDate": {
        oldValue: "string";
        newValue: "string";
      };
      "System.RevisedDate": {
        oldValue: "string";
        newValue: "string";
      };
      "System.State": {
        oldValue: "string";
        newValue: "string";
      };
      "System.Reason": {
        oldValue: "string";
        newValue: "string";
      };
      "System.AssignedTo": {
        oldValue: "string";
        newValue: "string";
      };
      "System.ChangedDate": {
        oldValue: "string";
        newValue: "string";
      };
      "System.Watermark": {
        oldValue: "string";
        newValue: "string";
      };
      "Microsoft.VSTS.Common.Severity": {
        oldValue: "string";
        newValue: "string";
      };
    };
    _links: {
      self: {
        href: "string";
      };
      parent: {
        href: "string";
      };
      workItemUpdates: {
        href: "string";
      };
      html: {
        href: "string";
      };
    };
    url: "string";
    revision: {
      id: "number";
      rev: "number";
      fields: {
        "System.AreaPath": "string";
        "System.TeamProject": "string";
        "System.IterationPath": "string";
        "System.WorkItemType": "string";
        "System.State": "string";
        "System.Reason": "string";
        "System.CreatedDate": "string";
        "System.CreatedBy": {
          displayName: "string";
          url: "string";
          _links: {
            avatar: {
              href: "string";
            };
          };
          id: "string";
          uniqueName: "string";
          imageUrl: "string";
          descriptor: "string";
        };
        "System.ChangedDate": "string";
        "System.ChangedBy": {
          displayName: "string";
          url: "string";
          _links: {
            avatar: {
              href: "string";
            };
          };
          id: "string";
          uniqueName: "string";
          imageUrl: "string";
          descriptor: "string";
        };
        "System.CommentCount": "number";
        "System.Title": "string";
        "Microsoft.VSTS.Common.Severity": "string";
        "Microsoft.VSTS.Common.Priority": "number";
      };
    };
  };
  resourceVersion: "string";
  resourceContainers: {
    collection: {
      id: "string";
    };
    account: {
      id: "string";
    };
    project: {
      id: "string";
    };
  };
  createdDate: "string";
}
