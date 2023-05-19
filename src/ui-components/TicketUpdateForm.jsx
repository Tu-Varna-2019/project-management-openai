/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Ticket, Project, User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function TicketUpdateForm(props) {
  const {
    id: idProp,
    ticket: ticketModelProp,
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
    Comment: "",
    StoryPoint: "",
    Watch: "",
    Reporter: "",
    Asignee: "",
    ImageTicket: "",
    EpicLink: "",
    CreatedDate: "",
    UpdatedDate: "",
    ResolvedDate: "",
    projectID: undefined,
    userID: undefined,
    IssueType: "",
    Priority: "",
    TicketStatus: "",
  };
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Comment, setComment] = React.useState(initialValues.Comment);
  const [StoryPoint, setStoryPoint] = React.useState(initialValues.StoryPoint);
  const [Watch, setWatch] = React.useState(initialValues.Watch);
  const [Reporter, setReporter] = React.useState(initialValues.Reporter);
  const [Asignee, setAsignee] = React.useState(initialValues.Asignee);
  const [ImageTicket, setImageTicket] = React.useState(
    initialValues.ImageTicket
  );
  const [EpicLink, setEpicLink] = React.useState(initialValues.EpicLink);
  const [CreatedDate, setCreatedDate] = React.useState(
    initialValues.CreatedDate
  );
  const [UpdatedDate, setUpdatedDate] = React.useState(
    initialValues.UpdatedDate
  );
  const [ResolvedDate, setResolvedDate] = React.useState(
    initialValues.ResolvedDate
  );
  const [projectID, setProjectID] = React.useState(initialValues.projectID);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [IssueType, setIssueType] = React.useState(initialValues.IssueType);
  const [Priority, setPriority] = React.useState(initialValues.Priority);
  const [TicketStatus, setTicketStatus] = React.useState(
    initialValues.TicketStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ticketRecord
      ? { ...initialValues, ...ticketRecord, projectID, userID }
      : initialValues;
    setTitle(cleanValues.Title);
    setDescription(cleanValues.Description);
    setComment(cleanValues.Comment);
    setStoryPoint(cleanValues.StoryPoint);
    setWatch(cleanValues.Watch);
    setReporter(cleanValues.Reporter);
    setAsignee(cleanValues.Asignee);
    setImageTicket(cleanValues.ImageTicket);
    setEpicLink(cleanValues.EpicLink);
    setCreatedDate(cleanValues.CreatedDate);
    setUpdatedDate(cleanValues.UpdatedDate);
    setResolvedDate(cleanValues.ResolvedDate);
    setProjectID(cleanValues.projectID);
    setCurrentProjectIDValue(undefined);
    setCurrentProjectIDDisplayValue("");
    setUserID(cleanValues.userID);
    setCurrentUserIDValue(undefined);
    setCurrentUserIDDisplayValue("");
    setIssueType(cleanValues.IssueType);
    setPriority(cleanValues.Priority);
    setTicketStatus(cleanValues.TicketStatus);
    setErrors({});
  };
  const [ticketRecord, setTicketRecord] = React.useState(ticketModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Ticket, idProp)
        : ticketModelProp;
      setTicketRecord(record);
      const projectIDRecord = record ? await record.projectID : undefined;
      setProjectID(projectIDRecord);
      const userIDRecord = record ? await record.userID : undefined;
      setUserID(userIDRecord);
    };
    queryData();
  }, [idProp, ticketModelProp]);
  React.useEffect(resetStateValues, [ticketRecord, projectID, userID]);
  const [currentProjectIDDisplayValue, setCurrentProjectIDDisplayValue] =
    React.useState("");
  const [currentProjectIDValue, setCurrentProjectIDValue] =
    React.useState(undefined);
  const projectIDRef = React.createRef();
  const [currentUserIDDisplayValue, setCurrentUserIDDisplayValue] =
    React.useState("");
  const [currentUserIDValue, setCurrentUserIDValue] = React.useState(undefined);
  const userIDRef = React.createRef();
  const projectRecords = useDataStoreBinding({
    type: "collection",
    model: Project,
  }).items;
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const getDisplayValue = {
    projectID: (r) => `${r?.Name ? r?.Name + " - " : ""}${r?.id}`,
    userID: (r) => `${r?.sub ? r?.sub + " - " : ""}${r?.id}`,
  };
  const validations = {
    Title: [{ type: "Required" }],
    Description: [],
    Comment: [],
    StoryPoint: [],
    Watch: [],
    Reporter: [{ type: "Required" }],
    Asignee: [],
    ImageTicket: [],
    EpicLink: [],
    CreatedDate: [{ type: "Required" }],
    UpdatedDate: [],
    ResolvedDate: [],
    projectID: [{ type: "Required" }],
    userID: [{ type: "Required" }],
    IssueType: [{ type: "Required" }],
    Priority: [{ type: "Required" }],
    TicketStatus: [{ type: "Required" }],
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
          Comment,
          StoryPoint,
          Watch,
          Reporter,
          Asignee,
          ImageTicket,
          EpicLink,
          CreatedDate,
          UpdatedDate,
          ResolvedDate,
          projectID,
          userID,
          IssueType,
          Priority,
          TicketStatus,
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
            Ticket.copyOf(ticketRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TicketUpdateForm")}
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
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
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
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
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
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={Comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment: value,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.Comment ?? value;
          }
          if (errors.Comment?.hasError) {
            runValidationTasks("Comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("Comment", Comment)}
        errorMessage={errors.Comment?.errorMessage}
        hasError={errors.Comment?.hasError}
        {...getOverrideProps(overrides, "Comment")}
      ></TextField>
      <TextField
        label="Story point"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={StoryPoint}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint: value,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.StoryPoint ?? value;
          }
          if (errors.StoryPoint?.hasError) {
            runValidationTasks("StoryPoint", value);
          }
          setStoryPoint(value);
        }}
        onBlur={() => runValidationTasks("StoryPoint", StoryPoint)}
        errorMessage={errors.StoryPoint?.errorMessage}
        hasError={errors.StoryPoint?.hasError}
        {...getOverrideProps(overrides, "StoryPoint")}
      ></TextField>
      <TextField
        label="Watch"
        isRequired={false}
        isReadOnly={false}
        value={Watch}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch: value,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.Watch ?? value;
          }
          if (errors.Watch?.hasError) {
            runValidationTasks("Watch", value);
          }
          setWatch(value);
        }}
        onBlur={() => runValidationTasks("Watch", Watch)}
        errorMessage={errors.Watch?.errorMessage}
        hasError={errors.Watch?.hasError}
        {...getOverrideProps(overrides, "Watch")}
      ></TextField>
      <TextField
        label="Reporter"
        isRequired={true}
        isReadOnly={false}
        value={Reporter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter: value,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.Reporter ?? value;
          }
          if (errors.Reporter?.hasError) {
            runValidationTasks("Reporter", value);
          }
          setReporter(value);
        }}
        onBlur={() => runValidationTasks("Reporter", Reporter)}
        errorMessage={errors.Reporter?.errorMessage}
        hasError={errors.Reporter?.hasError}
        {...getOverrideProps(overrides, "Reporter")}
      ></TextField>
      <TextField
        label="Asignee"
        isRequired={false}
        isReadOnly={false}
        value={Asignee}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee: value,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.Asignee ?? value;
          }
          if (errors.Asignee?.hasError) {
            runValidationTasks("Asignee", value);
          }
          setAsignee(value);
        }}
        onBlur={() => runValidationTasks("Asignee", Asignee)}
        errorMessage={errors.Asignee?.errorMessage}
        hasError={errors.Asignee?.hasError}
        {...getOverrideProps(overrides, "Asignee")}
      ></TextField>
      <TextField
        label="Image ticket"
        isRequired={false}
        isReadOnly={false}
        value={ImageTicket}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket: value,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.ImageTicket ?? value;
          }
          if (errors.ImageTicket?.hasError) {
            runValidationTasks("ImageTicket", value);
          }
          setImageTicket(value);
        }}
        onBlur={() => runValidationTasks("ImageTicket", ImageTicket)}
        errorMessage={errors.ImageTicket?.errorMessage}
        hasError={errors.ImageTicket?.hasError}
        {...getOverrideProps(overrides, "ImageTicket")}
      ></TextField>
      <TextField
        label="Epic link"
        isRequired={false}
        isReadOnly={false}
        value={EpicLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink: value,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.EpicLink ?? value;
          }
          if (errors.EpicLink?.hasError) {
            runValidationTasks("EpicLink", value);
          }
          setEpicLink(value);
        }}
        onBlur={() => runValidationTasks("EpicLink", EpicLink)}
        errorMessage={errors.EpicLink?.errorMessage}
        hasError={errors.EpicLink?.hasError}
        {...getOverrideProps(overrides, "EpicLink")}
      ></TextField>
      <TextField
        label="Created date"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={CreatedDate && convertToLocal(new Date(CreatedDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate: value,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.CreatedDate ?? value;
          }
          if (errors.CreatedDate?.hasError) {
            runValidationTasks("CreatedDate", value);
          }
          setCreatedDate(value);
        }}
        onBlur={() => runValidationTasks("CreatedDate", CreatedDate)}
        errorMessage={errors.CreatedDate?.errorMessage}
        hasError={errors.CreatedDate?.hasError}
        {...getOverrideProps(overrides, "CreatedDate")}
      ></TextField>
      <TextField
        label="Updated date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={UpdatedDate && convertToLocal(new Date(UpdatedDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate: value,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.UpdatedDate ?? value;
          }
          if (errors.UpdatedDate?.hasError) {
            runValidationTasks("UpdatedDate", value);
          }
          setUpdatedDate(value);
        }}
        onBlur={() => runValidationTasks("UpdatedDate", UpdatedDate)}
        errorMessage={errors.UpdatedDate?.errorMessage}
        hasError={errors.UpdatedDate?.hasError}
        {...getOverrideProps(overrides, "UpdatedDate")}
      ></TextField>
      <TextField
        label="Resolved date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={ResolvedDate && convertToLocal(new Date(ResolvedDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate: value,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.ResolvedDate ?? value;
          }
          if (errors.ResolvedDate?.hasError) {
            runValidationTasks("ResolvedDate", value);
          }
          setResolvedDate(value);
        }}
        onBlur={() => runValidationTasks("ResolvedDate", ResolvedDate)}
        errorMessage={errors.ResolvedDate?.errorMessage}
        hasError={errors.ResolvedDate?.hasError}
        {...getOverrideProps(overrides, "ResolvedDate")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID: value,
              userID,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.projectID ?? value;
          }
          setProjectID(value);
          setCurrentProjectIDValue(undefined);
        }}
        currentFieldValue={currentProjectIDValue}
        label={"Project id"}
        items={projectID ? [projectID] : []}
        hasError={errors?.projectID?.hasError}
        errorMessage={errors?.projectID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.projectID(
                projectRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentProjectIDDisplayValue(
            value
              ? getDisplayValue.projectID(
                  projectRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentProjectIDValue(value);
        }}
        inputFieldRef={projectIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Project id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Project"
          value={currentProjectIDDisplayValue}
          options={projectRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.projectID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentProjectIDValue(id);
            setCurrentProjectIDDisplayValue(label);
            runValidationTasks("projectID", label);
          }}
          onClear={() => {
            setCurrentProjectIDDisplayValue("");
          }}
          defaultValue={projectID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.projectID?.hasError) {
              runValidationTasks("projectID", value);
            }
            setCurrentProjectIDDisplayValue(value);
            setCurrentProjectIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("projectID", currentProjectIDValue)}
          errorMessage={errors.projectID?.errorMessage}
          hasError={errors.projectID?.hasError}
          ref={projectIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "projectID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID: value,
              IssueType,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          setUserID(value);
          setCurrentUserIDValue(undefined);
        }}
        currentFieldValue={currentUserIDValue}
        label={"User id"}
        items={userID ? [userID] : []}
        hasError={errors?.userID?.hasError}
        errorMessage={errors?.userID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.userID(userRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentUserIDDisplayValue(
            value
              ? getDisplayValue.userID(userRecords.find((r) => r.id === value))
              : ""
          );
          setCurrentUserIDValue(value);
        }}
        inputFieldRef={userIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserIDDisplayValue}
          options={userRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.userID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserIDValue(id);
            setCurrentUserIDDisplayValue(label);
            runValidationTasks("userID", label);
          }}
          onClear={() => {
            setCurrentUserIDDisplayValue("");
          }}
          defaultValue={userID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.userID?.hasError) {
              runValidationTasks("userID", value);
            }
            setCurrentUserIDDisplayValue(value);
            setCurrentUserIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("userID", currentUserIDValue)}
          errorMessage={errors.userID?.errorMessage}
          hasError={errors.userID?.hasError}
          ref={userIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "userID")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Issue type"
        isRequired={true}
        isReadOnly={false}
        value={IssueType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType: value,
              Priority,
              TicketStatus,
            };
            const result = onChange(modelFields);
            value = result?.IssueType ?? value;
          }
          if (errors.IssueType?.hasError) {
            runValidationTasks("IssueType", value);
          }
          setIssueType(value);
        }}
        onBlur={() => runValidationTasks("IssueType", IssueType)}
        errorMessage={errors.IssueType?.errorMessage}
        hasError={errors.IssueType?.hasError}
        {...getOverrideProps(overrides, "IssueType")}
      ></TextField>
      <TextField
        label="Priority"
        isRequired={true}
        isReadOnly={false}
        value={Priority}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority: value,
              TicketStatus,
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
        label="Ticket status"
        isRequired={true}
        isReadOnly={false}
        value={TicketStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Description,
              Comment,
              StoryPoint,
              Watch,
              Reporter,
              Asignee,
              ImageTicket,
              EpicLink,
              CreatedDate,
              UpdatedDate,
              ResolvedDate,
              projectID,
              userID,
              IssueType,
              Priority,
              TicketStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.TicketStatus ?? value;
          }
          if (errors.TicketStatus?.hasError) {
            runValidationTasks("TicketStatus", value);
          }
          setTicketStatus(value);
        }}
        onBlur={() => runValidationTasks("TicketStatus", TicketStatus)}
        errorMessage={errors.TicketStatus?.errorMessage}
        hasError={errors.TicketStatus?.hasError}
        {...getOverrideProps(overrides, "TicketStatus")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ticketModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ticketModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
