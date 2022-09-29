/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRental = /* GraphQL */ `
  query GetRental($id: ID!) {
    getRental(id: $id) {
      id
      name
      image
      price
      location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRentals = /* GraphQL */ `
  query ListRentals(
    $filter: ModelRentalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        price
        location
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRentals = /* GraphQL */ `
  query SyncRentals(
    $filter: ModelRentalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRentals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        price
        location
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
