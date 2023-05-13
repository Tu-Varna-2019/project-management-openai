/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { NoteV2 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NoteV2CreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Title: "",
    Description: "",
    Priority: "",
    Reminder: "",
    sub: "",
    Deleted: false,
    Notified: false,
    ImageName: "",
  };
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Priority, setPriority] = React.useState(initialValues.Priority);
  const [Reminder, setReminder] = React.useState(initialValues.Reminder);
  const [sub, setSub] = React.useState(initialValues.sub);
  const [Deleted, setDeleted] = React.useState(initialValues.Deleted);
  const [Notified, setNotified] = React.useState(initialValues.Notified);
  const [ImageName, setImageName] = React.useState(initialValues.ImageName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.Title);
    setDescription(initialValues.Description);
    setPriority(initialValues.Priority);
    setReminder(initialValues.Reminder);
    setSub(initialValues.sub);
    setDeleted(initialValues.Deleted);
    setNotified(initialValues.Notified);
    setImageName(initialValues.ImageName);
    setErrors({});
  };
  const validations = {
    Title: [{ type: "Required" }],
    Description: [],
    Priority: [],
    Reminder: [],
    sub: [],
    Deleted: [],
    Notified: [],
    ImageName: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Title,
          Description,
          Priority,
          Reminder,
          sub,
          Deleted,
          Notified,
          ImageName,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new NoteV2(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NoteV2CreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={Title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title: value,
              Description,
              Priority,
              Reminder,
              sub,
              Deleted,
              Notified,
              ImageName,
            };
            const result = onChange(modelFields);
            value = result?.Title ?? value;
          }
          if (errors.Title?.hasError) {
            runValidationTasks("Title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("Title", Title)}
        errorMessage={errors.Title?.errorMessage}
        hasError={errors.Title?.hasError}
        {...getOverrideProps(overrides, "Title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description: value,
              Priority,
              Reminder,
              sub,
              Deleted,
              Notified,
              ImageName,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        label="Priority"
        isRequired={false}
        isReadOnly={false}
        value={Priority}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Priority: value,
              Reminder,
              sub,
              Deleted,
              Notified,
              ImageName,
            };
            const result = onChange(modelFields);
            value = result?.Priority ?? value;
          }
          if (errors.Priority?.hasError) {
            runValidationTasks("Priority", value);
          }
          setPriority(value);
        }}
        onBlur={() => runValidationTasks("Priority", Priority)}
        errorMessage={errors.Priority?.errorMessage}
        hasError={errors.Priority?.hasError}
        {...getOverrideProps(overrides, "Priority")}
      ></TextField>
      <TextField
        label="Reminder"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={Reminder && convertToLocal(new Date(Reminder))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Priority,
              Reminder: value,
              sub,
              Deleted,
              Notified,
              ImageName,
            };
            const result = onChange(modelFields);
            value = result?.Reminder ?? value;
          }
          if (errors.Reminder?.hasError) {
            runValidationTasks("Reminder", value);
          }
          setReminder(value);
        }}
        onBlur={() => runValidationTasks("Reminder", Reminder)}
        errorMessage={errors.Reminder?.errorMessage}
        hasError={errors.Reminder?.hasError}
        {...getOverrideProps(overrides, "Reminder")}
      ></TextField>
      <TextField
        label="Sub"
        isRequired={false}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Priority,
              Reminder,
              sub: value,
              Deleted,
              Notified,
              ImageName,
            };
            const result = onChange(modelFields);
            value = result?.sub ?? value;
          }
          if (errors.sub?.hasError) {
            runValidationTasks("sub", value);
          }
          setSub(value);
        }}
        onBlur={() => runValidationTasks("sub", sub)}
        errorMessage={errors.sub?.errorMessage}
        hasError={errors.sub?.hasError}
        {...getOverrideProps(overrides, "sub")}
      ></TextField>
      <SwitchField
        label="Deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Deleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Priority,
              Reminder,
              sub,
              Deleted: value,
              Notified,
              ImageName,
            };
            const result = onChange(modelFields);
            value = result?.Deleted ?? value;
          }
          if (errors.Deleted?.hasError) {
            runValidationTasks("Deleted", value);
          }
          setDeleted(value);
        }}
        onBlur={() => runValidationTasks("Deleted", Deleted)}
        errorMessage={errors.Deleted?.errorMessage}
        hasError={errors.Deleted?.hasError}
        {...getOverrideProps(overrides, "Deleted")}
      ></SwitchField>
      <SwitchField
        label="Notified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Notified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Priority,
              Reminder,
              sub,
              Deleted,
              Notified: value,
              ImageName,
            };
            const result = onChange(modelFields);
            value = result?.Notified ?? value;
          }
          if (errors.Notified?.hasError) {
            runValidationTasks("Notified", value);
          }
          setNotified(value);
        }}
        onBlur={() => runValidationTasks("Notified", Notified)}
        errorMessage={errors.Notified?.errorMessage}
        hasError={errors.Notified?.hasError}
        {...getOverrideProps(overrides, "Notified")}
      ></SwitchField>
      <TextField
        label="Image name"
        isRequired={false}
        isReadOnly={false}
        value={ImageName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Priority,
              Reminder,
              sub,
              Deleted,
              Notified,
              ImageName: value,
            };
            const result = onChange(modelFields);
            value = result?.ImageName ?? value;
          }
          if (errors.ImageName?.hasError) {
            runValidationTasks("ImageName", value);
          }
          setImageName(value);
        }}
        onBlur={() => runValidationTasks("ImageName", ImageName)}
        errorMessage={errors.ImageName?.errorMessage}
        hasError={errors.ImageName?.hasError}
        {...getOverrideProps(overrides, "ImageName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
