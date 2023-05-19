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
import { User, Ticket } from "../models";
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
export default function UserCreateForm(props) {
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
    sub: "",
    username: "",
    ImageProfile: "",
    OUserMTickets: [],
  };
  const [sub, setSub] = React.useState(initialValues.sub);
  const [username, setUsername] = React.useState(initialValues.username);
  const [ImageProfile, setImageProfile] = React.useState(
    initialValues.ImageProfile
  );
  const [OUserMTickets, setOUserMTickets] = React.useState(
    initialValues.OUserMTickets
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSub(initialValues.sub);
    setUsername(initialValues.username);
    setImageProfile(initialValues.ImageProfile);
    setOUserMTickets(initialValues.OUserMTickets);
    setCurrentOUserMTicketsValue(undefined);
    setCurrentOUserMTicketsDisplayValue("");
    setErrors({});
  };
  const [
    currentOUserMTicketsDisplayValue,
    setCurrentOUserMTicketsDisplayValue,
  ] = React.useState("");
  const [currentOUserMTicketsValue, setCurrentOUserMTicketsValue] =
    React.useState(undefined);
  const OUserMTicketsRef = React.createRef();
  const getIDValue = {
    OUserMTickets: (r) => JSON.stringify({ id: r?.id }),
  };
  const OUserMTicketsIdSet = new Set(
    Array.isArray(OUserMTickets)
      ? OUserMTickets.map((r) => getIDValue.OUserMTickets?.(r))
      : getIDValue.OUserMTickets?.(OUserMTickets)
  );
  const ticketRecords = useDataStoreBinding({
    type: "collection",
    model: Ticket,
  }).items;
  const getDisplayValue = {
    OUserMTickets: (r) => `${r?.Title ? r?.Title + " - " : ""}${r?.id}`,
  };
  const validations = {
    sub: [{ type: "Required" }],
    username: [{ type: "Required" }],
    ImageProfile: [],
    OUserMTickets: [],
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
          sub,
          username,
          ImageProfile,
          OUserMTickets,
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
          const modelFieldsToSave = {
            sub: modelFields.sub,
            username: modelFields.username,
            ImageProfile: modelFields.ImageProfile,
          };
          const user = await DataStore.save(new User(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...OUserMTickets.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Ticket.copyOf(original, (updated) => {
                    updated.userID = user.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Sub"
        isRequired={true}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub: value,
              username,
              ImageProfile,
              OUserMTickets,
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
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              username: value,
              ImageProfile,
              OUserMTickets,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Image profile"
        isRequired={false}
        isReadOnly={false}
        value={ImageProfile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              username,
              ImageProfile: value,
              OUserMTickets,
            };
            const result = onChange(modelFields);
            value = result?.ImageProfile ?? value;
          }
          if (errors.ImageProfile?.hasError) {
            runValidationTasks("ImageProfile", value);
          }
          setImageProfile(value);
        }}
        onBlur={() => runValidationTasks("ImageProfile", ImageProfile)}
        errorMessage={errors.ImageProfile?.errorMessage}
        hasError={errors.ImageProfile?.hasError}
        {...getOverrideProps(overrides, "ImageProfile")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              sub,
              username,
              ImageProfile,
              OUserMTickets: values,
            };
            const result = onChange(modelFields);
            values = result?.OUserMTickets ?? values;
          }
          setOUserMTickets(values);
          setCurrentOUserMTicketsValue(undefined);
          setCurrentOUserMTicketsDisplayValue("");
        }}
        currentFieldValue={currentOUserMTicketsValue}
        label={"O user m tickets"}
        items={OUserMTickets}
        hasError={errors?.OUserMTickets?.hasError}
        errorMessage={errors?.OUserMTickets?.errorMessage}
        getBadgeText={getDisplayValue.OUserMTickets}
        setFieldValue={(model) => {
          setCurrentOUserMTicketsDisplayValue(
            model ? getDisplayValue.OUserMTickets(model) : ""
          );
          setCurrentOUserMTicketsValue(model);
        }}
        inputFieldRef={OUserMTicketsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="O user m tickets"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Ticket"
          value={currentOUserMTicketsDisplayValue}
          options={ticketRecords
            .filter(
              (r) => !OUserMTicketsIdSet.has(getIDValue.OUserMTickets?.(r))
            )
            .map((r) => ({
              id: getIDValue.OUserMTickets?.(r),
              label: getDisplayValue.OUserMTickets?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentOUserMTicketsValue(
              ticketRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentOUserMTicketsDisplayValue(label);
            runValidationTasks("OUserMTickets", label);
          }}
          onClear={() => {
            setCurrentOUserMTicketsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.OUserMTickets?.hasError) {
              runValidationTasks("OUserMTickets", value);
            }
            setCurrentOUserMTicketsDisplayValue(value);
            setCurrentOUserMTicketsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "OUserMTickets",
              currentOUserMTicketsDisplayValue
            )
          }
          errorMessage={errors.OUserMTickets?.errorMessage}
          hasError={errors.OUserMTickets?.hasError}
          ref={OUserMTicketsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "OUserMTickets")}
        ></Autocomplete>
      </ArrayField>
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
