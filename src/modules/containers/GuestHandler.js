import React, { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { currentGuest, setCurrentGuest } from "../../ReactiveVariables";
import { ObjectId } from "../helpers";

const CREATE_GUEST = gql`
  mutation createGuest($_id: ID) {
    createGuest(_id: $_id) {
      _id
      status
      user {
        _id
      }
    }
  }
`;

const GuestHandler = ({ children }) => {
  const [createGuest] = useMutation(CREATE_GUEST);

console.log(currentGuest())

  useEffect(() => {
    if (!currentGuest()) {
      const _id = ObjectId();
      setCurrentGuest(_id);
      createGuest({
        variables: { _id },
        optimisticResponse: {
          __typename: "Mutation",
          createGuest: {
            _id,
            __typename: "Guest",
            status: "unregistered",
            user: null,
          },
        },
      })
        .then(({ data }) => setCurrentGuest(data.createGuest._id))
        .catch((err) => {
          setCurrentGuest("");
        });
    }
  }, [currentGuest()]);

  return <div>{children}</div>;
};

export default GuestHandler;
