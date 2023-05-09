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
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { NoteV2 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReminderNoteForm(props) {
  const {
    id: idProp,
    noteV2: noteV2ModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    Title: "",
    Reminder: "",
    Deleted: false,
    Notified: false,
  };
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [Reminder, setReminder] = React.useState(initialValues.Reminder);
  const [Deleted, setDeleted] = React.useState(initialValues.Deleted);
  const [Notified, setNotified] = React.useState(initialValues.Notified);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = noteV2Record
      ? { ...initialValues, ...noteV2Record }
      : initialValues;
    setTitle(cleanValues.Title);
    setReminder(cleanValues.Reminder);
    setDeleted(cleanValues.Deleted);
    setNotified(cleanValues.Notified);
    setErrors({});
  };
  const [noteV2Record, setNoteV2Record] = React.useState(noteV2ModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(NoteV2, idProp)
        : noteV2ModelProp;
      setNoteV2Record(record);
    };
    queryData();
  }, [idProp, noteV2ModelProp]);
  React.useEffect(resetStateValues, [noteV2Record]);
  const validations = {
    Title: [{ type: "Required" }],
    Reminder: [],
    Deleted: [],
    Notified: [],
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
      rowGap={tokens.space.small.value}
      columnGap={tokens.space.small.value}
      padding={tokens.space.small.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Title,
          Reminder,
          Deleted,
          Notified,
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
          await DataStore.save(
            NoteV2.copyOf(noteV2Record, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReminderNoteForm")}
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
              Reminder,
              Deleted,
              Notified,
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
              Reminder: value,
              Deleted,
              Notified,
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
              Reminder,
              Deleted: value,
              Notified,
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
              Reminder,
              Deleted,
              Notified: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap={tokens.space.small.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Save"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || noteV2ModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
