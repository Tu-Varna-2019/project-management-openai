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
    UserId: "",
    Deleted: false,
  };
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Priority, setPriority] = React.useState(initialValues.Priority);
  const [Reminder, setReminder] = React.useState(initialValues.Reminder);
  const [UserId, setUserId] = React.useState(initialValues.UserId);
  const [Deleted, setDeleted] = React.useState(initialValues.Deleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.Title);
    setDescription(initialValues.Description);
    setPriority(initialValues.Priority);
    setReminder(initialValues.Reminder);
    setUserId(initialValues.UserId);
    setDeleted(initialValues.Deleted);
    setErrors({});
  };
  const validations = {
    Title: [{ type: "Required" }],
    Description: [],
    Priority: [],
    Reminder: [],
    UserId: [],
    Deleted: [],
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
          UserId,
          Deleted,
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
              UserId,
              Deleted,
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
              UserId,
              Deleted,
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
              UserId,
              Deleted,
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
              UserId,
              Deleted,
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
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={UserId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Priority,
              Reminder,
              UserId: value,
              Deleted,
            };
            const result = onChange(modelFields);
            value = result?.UserId ?? value;
          }
          if (errors.UserId?.hasError) {
            runValidationTasks("UserId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("UserId", UserId)}
        errorMessage={errors.UserId?.errorMessage}
        hasError={errors.UserId?.hasError}
        {...getOverrideProps(overrides, "UserId")}
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
              UserId,
              Deleted: value,
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
