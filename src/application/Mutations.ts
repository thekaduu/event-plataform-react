import { gql } from "@apollo/client";


export const CREATE_SUBSCRIBER = gql`
mutation CreateSubscriber($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}
`