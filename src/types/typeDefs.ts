import { gql } from "apollo-server";

const typeDefs = gql`

  enum Country {
    Turkey
    Russia
    UnitedStates
  }

  type Teacher {
    id: ID!
    name: String!
    surname: String!
    age: Int!
    country: Country!
    title: String
  }


  type Student {
    id: ID!
    name: String!
    surname: String!
    age: Int!
    country: Country!
    advisor: Teacher!
    title: String
    classes: [Class!]!
  }

  type Class {
    id: ID!
    name: String!
    teacher: Teacher
    students: [Student!]!
  }

  type School {
    id: ID!
    students: [Student!]!
    teachers: [Teacher!]!
    classes: [Class!]!
  }

  type Query {
    students: [Student!]!
    student(id: ID!): Student
  }
`;


export default typeDefs;
