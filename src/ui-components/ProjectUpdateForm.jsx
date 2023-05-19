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
import { Project, Ticket } from "../models";
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
export default function ProjectUpdateForm(props) {
  const {
    id: idProp,
    project: projectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    OProjectMTickets: [],
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [OProjectMTickets, setOProjectMTickets] = React.useState(
    initialValues.OProjectMTickets
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projectRecord
      ? {
          ...initialValues,
          ...projectRecord,
          OProjectMTickets: linkedOProjectMTickets,
        }
      : initialValues;
    setName(cleanValues.Name);
    setOProjectMTickets(cleanValues.OProjectMTickets ?? []);
    setCurrentOProjectMTicketsValue(undefined);
    setCurrentOProjectMTicketsDisplayValue("");
    setErrors({});
  };
  const [projectRecord, setProjectRecord] = React.useState(projectModelProp);
  const [linkedOProjectMTickets, setLinkedOProjectMTickets] = React.useState(
    []
  );
  const canUnlinkOProjectMTickets = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Project, idProp)
        : projectModelProp;
      setProjectRecord(record);
      const linkedOProjectMTickets = record
        ? await record.OProjectMTickets.toArray()
        : [];
      setLinkedOProjectMTickets(linkedOProjectMTickets);
    };
    queryData();
  }, [idProp, projectModelProp]);
  React.useEffect(resetStateValues, [projectRecord, linkedOProjectMTickets]);
  const [
    currentOProjectMTicketsDisplayValue,
    setCurrentOProjectMTicketsDisplayValue,
  ] = React.useState("");
  const [currentOProjectMTicketsValue, setCurrentOProjectMTicketsValue] =
    React.useState(undefined);
  const OProjectMTicketsRef = React.createRef();
  const getIDValue = {
    OProjectMTickets: (r) => JSON.stringify({ id: r?.id }),
  };
  const OProjectMTicketsIdSet = new Set(
    Array.isArray(OProjectMTickets)
      ? OProjectMTickets.map((r) => getIDValue.OProjectMTickets?.(r))
      : getIDValue.OProjectMTickets?.(OProjectMTickets)
  );
  const ticketRecords = useDataStoreBinding({
    type: "collection",
    model: Ticket,
  }).items;
  const getDisplayValue = {
    OProjectMTickets: (r) => `${r?.Title ? r?.Title + " - " : ""}${r?.id}`,
  };
  const validations = {
    Name: [{ type: "Required" }],
    OProjectMTickets: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name,
          OProjectMTickets,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const promises = [];
          const oProjectMTicketsToLink = [];
          const oProjectMTicketsToUnLink = [];
          const oProjectMTicketsSet = new Set();
          const linkedOProjectMTicketsSet = new Set();
          OProjectMTickets.forEach((r) =>
            oProjectMTicketsSet.add(getIDValue.OProjectMTickets?.(r))
          );
          linkedOProjectMTickets.forEach((r) =>
            linkedOProjectMTicketsSet.add(getIDValue.OProjectMTickets?.(r))
          );
          linkedOProjectMTickets.forEach((r) => {
            if (!oProjectMTicketsSet.has(getIDValue.OProjectMTickets?.(r))) {
              oProjectMTicketsToUnLink.push(r);
            }
          });
          OProjectMTickets.forEach((r) => {
            if (
              !linkedOProjectMTicketsSet.has(getIDValue.OProjectMTickets?.(r))
            ) {
              oProjectMTicketsToLink.push(r);
            }
          });
          oProjectMTicketsToUnLink.forEach((original) => {
            if (!canUnlinkOProjectMTickets) {
              throw Error(
                `Ticket ${original.id} cannot be unlinked from Project because projectID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Ticket.copyOf(original, (updated) => {
                  updated.projectID = null;
                })
              )
            );
          });
          oProjectMTicketsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Ticket.copyOf(original, (updated) => {
                  updated.projectID = projectRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            Name: modelFields.Name,
          };
          promises.push(
            DataStore.save(
              Project.copyOf(projectRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              OProjectMTickets,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Name,
              OProjectMTickets: values,
            };
            const result = onChange(modelFields);
            values = result?.OProjectMTickets ?? values;
          }
          setOProjectMTickets(values);
          setCurrentOProjectMTicketsValue(undefined);
          setCurrentOProjectMTicketsDisplayValue("");
        }}
        currentFieldValue={currentOProjectMTicketsValue}
        label={"O project m tickets"}
        items={OProjectMTickets}
        hasError={errors?.OProjectMTickets?.hasError}
        errorMessage={errors?.OProjectMTickets?.errorMessage}
        getBadgeText={getDisplayValue.OProjectMTickets}
        setFieldValue={(model) => {
          setCurrentOProjectMTicketsDisplayValue(
            model ? getDisplayValue.OProjectMTickets(model) : ""
          );
          setCurrentOProjectMTicketsValue(model);
        }}
        inputFieldRef={OProjectMTicketsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="O project m tickets"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Ticket"
          value={currentOProjectMTicketsDisplayValue}
          options={ticketRecords
            .filter(
              (r) =>
                !OProjectMTicketsIdSet.has(getIDValue.OProjectMTickets?.(r))
            )
            .map((r) => ({
              id: getIDValue.OProjectMTickets?.(r),
              label: getDisplayValue.OProjectMTickets?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentOProjectMTicketsValue(
              ticketRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentOProjectMTicketsDisplayValue(label);
            runValidationTasks("OProjectMTickets", label);
          }}
          onClear={() => {
            setCurrentOProjectMTicketsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.OProjectMTickets?.hasError) {
              runValidationTasks("OProjectMTickets", value);
            }
            setCurrentOProjectMTicketsDisplayValue(value);
            setCurrentOProjectMTicketsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "OProjectMTickets",
              currentOProjectMTicketsDisplayValue
            )
          }
          errorMessage={errors.OProjectMTickets?.errorMessage}
          hasError={errors.OProjectMTickets?.hasError}
          ref={OProjectMTicketsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "OProjectMTickets")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || projectModelProp)}
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
              !(idProp || projectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
