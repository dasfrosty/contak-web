import * as React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import { useInputChangeWrapper } from "../../common/hooks";
import { useContactQuery, ContactFragment } from "../../graphql";
import { Loading } from "../components";

const { useCallback, useState } = React;

export interface Props {
  contactId: string;
}

export function ContactDetails(props: Props) {
  const { contactId } = props;

  const { loading, error, data } = useContactQuery(contactId);

  const contact = data?.contact;

  return (
    <Loading loading={loading} error={error} notFound={contact == undefined}>
      <ContactDetailsForm contact={contact} />
    </Loading>
  );
}

interface ContactDetailsFormFields {
  contactId: string;
  firstName: string;
  lastName: string;
  note: string;
}

function createContactDetailsFormFields(): ContactDetailsFormFields {
  return {
    contactId: "",
    firstName: "",
    lastName: "",
    note: "",
  };
}

function editContactDetailsFormFields(contact: ContactFragment): ContactDetailsFormFields {
  return {
    contactId: contact.id,
    firstName: contact.firstName,
    lastName: contact.lastName,
    note: contact.note ?? "",
  };
}

function useContactDetailsForm(initial: ContactDetailsFormFields) {
  const [inputFields, setInputFields] = useState(initial);

  const handleInputChange = useCallback(
    (name: string, value: string) => {
      const fieldUpdates = { [name]: value };
      setInputFields((fields) => ({ ...fields, ...fieldUpdates }));
    },
    [setInputFields],
  );

  //   const updateContactMutation = useCreateContactMutation();
  const createContactMutation = () => {};

  //   const updateContactMutation = useUpdateContactMutation();
  const updateContactMutation = () => {};

  const handleSubmit = useCallback(() => {
    if (inputFields.contactId === "") {
      return createContactMutation();
    } else {
      return updateContactMutation();
      //       {
      //     variables: {
      //       ...inputFields,
      //     },
      //   }
    }
  }, [createContactMutation, updateContactMutation, inputFields]);

  return {
    inputFields,
    setInputFields,
    handleInputChange,
    handleSubmit,
  };
}

interface ContactDetailsFormProps {
  contact?: ContactFragment | null;
}

function ContactDetailsForm({ contact }: ContactDetailsFormProps) {
  const initial =
    contact == null ? createContactDetailsFormFields() : editContactDetailsFormFields(contact);

  const { inputFields, handleInputChange, handleSubmit } = useContactDetailsForm(initial);
  const handleChange = useInputChangeWrapper(handleInputChange);

  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>First Name</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="firstName"
            value={inputFields.firstName}
            onChange={handleChange}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Last Name</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="lastName" value={inputFields.lastName} onChange={handleChange} />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Note</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="note" value={inputFields.note} onChange={handleChange} />
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
