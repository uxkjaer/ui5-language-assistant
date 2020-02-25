import { LibraryFile } from "../../../src/apiJson";

export const api: LibraryFile = {
  "$schema-ref": "http://schemas.sap.com/sapui5/designtime/api.json/1.0",
  version: "1.74.0",
  library: "sap.ui.fl",
  symbols: [
    {
      kind: "namespace",
      name: "sap.ui.fl",
      basename: "fl",
      resource: "sap/ui/fl/library.js",
      module: "sap/ui/fl/library",
      export: "",
      static: true,
      visibility: "restricted",
      description:
        "SAPUI5 Library for SAPUI5 Flexibility and Descriptor Changes, App Variants, Control Variants (Views) and Personalization."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.changes.descriptor.Applier",
      basename: "Applier",
      resource: "sap/ui/fl/apply/_internal/changes/descriptor/Applier.js",
      module: "sap/ui/fl/apply/_internal/changes/descriptor/Applier",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description:
        "Flex hook for preprocessing manifest early. Merges descriptor changes if needed.",
      experimental: {}
    },
    {
      kind: "namespace",
      name:
        "sap.ui.fl.apply._internal.changes.descriptor.DescriptorChangeHandlerRegistration",
      basename: "DescriptorChangeHandlerRegistration",
      resource:
        "sap/ui/fl/apply/_internal/changes/descriptor/DescriptorChangeHandlerRegistration.js",
      module:
        "sap/ui/fl/apply/_internal/changes/descriptor/DescriptorChangeHandlerRegistration",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description: "Loads and registers all change handlers",
      experimental: {}
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.changes.descriptor.ui5.AddLibrary",
      basename: "AddLibrary",
      resource:
        "sap/ui/fl/apply/_internal/changes/descriptor/ui5/AddLibrary.js",
      module: "sap/ui/fl/apply/_internal/changes/descriptor/ui5/AddLibrary",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description:
        'Descriptor Change Merger for changeType "appdescr_ui5_addLibraries".',
      experimental: {}
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.BackendConnector",
      basename: "BackendConnector",
      resource: "sap/ui/fl/apply/_internal/connectors/BackendConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/BackendConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.72",
      description:
        "Base connector for requesting flexibility data from a back end."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.JsObjectConnector",
      basename: "JsObjectConnector",
      resource: "sap/ui/fl/apply/_internal/connectors/JsObjectConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/JsObjectConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description: "Connector that retrieves data from an internal object.",
      experimental: {
        since: "1.70"
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.KeyUserConnector",
      basename: "KeyUserConnector",
      resource: "sap/ui/fl/apply/_internal/connectors/KeyUserConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/KeyUserConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "Connector for requesting data from SAPUI5 Flexibility KeyUser service."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.LocalStorageConnector",
      basename: "LocalStorageConnector",
      resource: "sap/ui/fl/apply/_internal/connectors/LocalStorageConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/LocalStorageConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "Connector for requesting data from <code>window.localStorage</code>.",
      experimental: {
        since: "1.70"
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.LrepConnector",
      basename: "LrepConnector",
      resource: "sap/ui/fl/apply/_internal/connectors/LrepConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/LrepConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.67",
      description: "Connector for requesting data from an LRep based back end.",
      experimental: {
        since: "1.67"
      },
      methods: [
        {
          name: "_addClientAndLanguageInfo",
          visibility: "restricted",
          static: true,
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              description: "Parameters of the request"
            }
          ],
          description:
            "Adds client and language info from browser url into request parameters"
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.ObjectPathConnector",
      basename: "ObjectPathConnector",
      resource: "sap/ui/fl/apply/_internal/connectors/ObjectPathConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/ObjectPathConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.73",
      description:
        "Connector that retrieves data from a json loaded from a specified path; the path can be set via setJsonPath for compatibility reasons from the sap/ui/fl/FakeLrepConnector or set in the connector configuration."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.ObjectStorageConnector",
      basename: "ObjectStorageConnector",
      resource:
        "sap/ui/fl/apply/_internal/connectors/ObjectStorageConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/ObjectStorageConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "Base Connector for requesting data from session or local storage"
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.PersonalizationConnector",
      basename: "PersonalizationConnector",
      resource:
        "sap/ui/fl/apply/_internal/connectors/PersonalizationConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/PersonalizationConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "Connector for requesting data from SAPUI5 Flexibility Personalization service."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.SessionStorageConnector",
      basename: "SessionStorageConnector",
      resource:
        "sap/ui/fl/apply/_internal/connectors/SessionStorageConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/SessionStorageConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "Connector for requesting data from <code>window.sessionStorage</code>.",
      experimental: {
        since: "1.70"
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.StaticFileConnector",
      basename: "StaticFileConnector",
      resource: "sap/ui/fl/apply/_internal/connectors/StaticFileConnector.js",
      module: "sap/ui/fl/apply/_internal/connectors/StaticFileConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.67",
      description:
        "Connector for requesting flexibility data gereneated as part of the applications build step."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.connectors.Utils",
      basename: "Utils",
      resource: "sap/ui/fl/apply/_internal/connectors/ObjectStorageUtils.js",
      module: "sap/ui/fl/apply/_internal/connectors/ObjectStorageUtils",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description: "Util class for Connector implementations (apply and write)"
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.flexState.changes.DependencyHandler",
      basename: "DependencyHandler",
      resource:
        "sap/ui/fl/apply/_internal/flexState/changes/DependencyHandler.js",
      module: "sap/ui/fl/apply/_internal/flexState/changes/DependencyHandler",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description: "Includes functionality needed for all dependency handling",
      experimental: {}
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.flexState.FlexState",
      basename: "FlexState",
      resource: "sap/ui/fl/apply/_internal/flexState/FlexState.js",
      module: "sap/ui/fl/apply/_internal/flexState/FlexState",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.73",
      description:
        'Flex state class to persist maps and raw state (cache) for a given component reference. The persistence happens inside an object mapped to the component reference, with the following properties:\n\n{ appDescriptorMap: {}, changesMap: {}, variantsMap: {}, storageResponse: { changes: { changes: [...], variants: [...], variantChanges: [...], variantDependentControlChanges: [...], variantManagementChanges: [...], ui2personalization: {...}, }, loadModules: <boolean> }}, componentId: "<componentId>" }',
      experimental: {}
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.flexState.Loader",
      basename: "Loader",
      resource: "sap/ui/fl/apply/_internal/flexState/Loader.js",
      module: "sap/ui/fl/apply/_internal/flexState/Loader",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description:
        "Class for loading Flex Data from the backend via the Connectors.",
      experimental: {}
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.Storage",
      basename: "Storage",
      resource: "sap/ui/fl/apply/_internal/Storage.js",
      module: "sap/ui/fl/apply/_internal/Storage",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.67",
      description:
        "Abstraction providing an API to handle communication with persistence like back ends, local & session storage or work spaces."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.StorageResultDisassemble",
      basename: "StorageResultDisassemble",
      resource: "sap/ui/fl/apply/_internal/storageResultDisassemble.js",
      module: "sap/ui/fl/apply/_internal/storageResultDisassemble",
      static: true,
      visibility: "restricted",
      since: "1.70"
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.StorageUtils",
      basename: "StorageUtils",
      resource: "sap/ui/fl/apply/_internal/StorageUtils.js",
      module: "sap/ui/fl/apply/_internal/StorageUtils",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description:
        "Util class for Storage implementations (apply); In addition the ObjectPathConnector and ObjectStorageConnector makes use of this class since they are very low level connector implementations without preparing structures of responses."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply._internal.variants.URLHandler",
      basename: "URLHandler",
      resource: "sap/ui/fl/apply/_internal/controlVariants/URLHandler.js",
      module: "sap/ui/fl/apply/_internal/controlVariants/URLHandler",
      static: true,
      visibility: "restricted",
      since: "1.72",
      description:
        "URL handler utility for <code>sap.ui.fl variants</code> (@see sap.ui.fl.variants.VariantManagement}"
    },
    {
      kind: "namespace",
      name:
        "sap.ui.fl.apply.api.apply._internal.flexState.controlVariants.Switcher",
      basename: "Switcher",
      resource:
        "sap/ui/fl/apply/_internal/flexState/controlVariants/Switcher.js",
      module: "sap/ui/fl/apply/_internal/flexState/controlVariants/Switcher",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description:
        "Provides functionality to switch variants in a variants map. See also {@link sap.ui.fl.variants.VariantManagement}.",
      experimental: {
        since: "1.74"
      }
    },
    {
      kind: "namespace",
      name:
        "sap.ui.fl.apply.api.apply._internal.flexState.controlVariants.VariantManagementState",
      basename: "VariantManagementState",
      resource:
        "sap/ui/fl/apply/_internal/flexState/controlVariants/VariantManagementState.js",
      module:
        "sap/ui/fl/apply/_internal/flexState/controlVariants/VariantManagementState",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description:
        "Handler class to manipulate control variant changes in a variants map. See also {@link sap.ui.fl.variants.VariantManagement}.",
      experimental: {
        since: "1.74"
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply.api.ControlVariantApplyAPI",
      basename: "ControlVariantApplyAPI",
      resource: "sap/ui/fl/apply/api/ControlVariantApplyAPI.js",
      module: "sap/ui/fl/apply/api/ControlVariantApplyAPI",
      export: "",
      static: true,
      visibility: "public",
      since: "1.67",
      description:
        "Provides an API for applications to work with control variants. See also {@link sap.ui.fl.variants.VariantManagement}.",
      experimental: {
        since: "1.67"
      },
      methods: [
        {
          name: "activateVariant",
          visibility: "public",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves after the variant is updated, or is rejected if an error occurs"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                element: {
                  name: "element",
                  type: "sap.ui.base.ManagedObject|string",
                  optional: false,
                  description:
                    "Component or control (instance or ID) on which the <code>variantModel</code> is set"
                },
                variantReference: {
                  name: "variantReference",
                  type: "string",
                  optional: false,
                  description:
                    "Reference to the variant that needs to be activated"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Activates the passed variant applicable to the passed control/component."
        },
        {
          name: "clearVariantParameterInURL",
          visibility: "public",
          static: true,
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.base.ManagedObject",
                  optional: false,
                  description:
                    "Variant management control for which the URL technical parameter has to be cleared"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Clears URL technical parameter <code>sap-ui-fl-control-variant-id</code> for control variants. Use this method in case you normally want the variant parameter in the URL, but have a few special navigation patterns where you want to clear it. If you don't want that parameter in general, set the <code>updateVariantInURL</code> parameter on your variant management control to <code>false</code>. SAP Fiori elements use this method. If a variant management control is given as a parameter, only parameters specific to that control are cleared."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply.api.FlexRuntimeInfoAPI",
      basename: "FlexRuntimeInfoAPI",
      resource: "sap/ui/fl/apply/api/FlexRuntimeInfoAPI.js",
      module: "sap/ui/fl/apply/api/FlexRuntimeInfoAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.67",
      description:
        "Provides an API to get specific information about the <code>sap.ui.fl</code> runtime.",
      experimental: {
        since: "1.67"
      },
      methods: [
        {
          name: "hasVariantManagement",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "boolean",
            description:
              "<code>true</code> if a variant management control encompasses the given control"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                element: {
                  name: "element",
                  type: "sap.ui.core.Element",
                  optional: false,
                  description:
                    "Element which should be tested for an encompassing variant management control"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Determines if an encompassing variant management control is available."
        },
        {
          name: "isFlexSupported",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "boolean",
            description:
              "<code>true</code> if flexibility features are supported"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                element: {
                  name: "element",
                  type: "sap.ui.core.Element",
                  optional: false,
                  description: "Control to be checked"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Checks if the flexibility features are supported for a given control."
        },
        {
          name: "isPersonalized",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise.<boolean>",
            description:
              "Promise resolving to a boolean that indicates if personalization changes exist"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selectors: {
                  name: "selectors",
                  type: "sap.ui.fl.Selector[]",
                  optional: false,
                  description:
                    "An array of {@link sap.ui.fl.Selector}s for which personalization should exist"
                },
                changeTypes: {
                  name: "changeTypes",
                  type: "array",
                  optional: true,
                  description:
                    "Additional filter for types of changes that should have existing personalization"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description: "Checks if personalization changes exist for controls."
        },
        {
          name: "waitForChanges",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves when all changes on the control are processed"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                element: {
                  name: "element",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description:
                    "Control whose changes are being waited for, the control has to exist"
                },
                selectors: {
                  name: "selectors",
                  type: "sap.ui.fl.Selector[]",
                  optional: false,
                  description:
                    "An array of {@link sap.ui.fl.Selector}s, whose changes are being waited for, the controls have to exist"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Resolves with a promise after all the changes for all controls that are passed have been processed. You can either pass a single control or multiple, don't mix selectors and element parameters."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply.api.SmartVariantManagementApplyAPI",
      basename: "SmartVariantManagementApplyAPI",
      resource: "sap/ui/fl/apply/api/SmartVariantManagementApplyAPI.js",
      module: "sap/ui/fl/apply/api/SmartVariantManagementApplyAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.69.0",
      description:
        "Provides an API to handle specific functionalities for the <code>sap.ui.comp</code> library.",
      experimental: {},
      methods: [
        {
          name: "getChangeById",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "sap.ui.fl.Change",
            description: "Change or variant object"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.comp.smartvariants.SmartVariantManagement",
                  optional: false,
                  description: "SAPUI5 Smart Variant Management control"
                },
                id: {
                  name: "id",
                  type: "string",
                  optional: false,
                  description: "ID of the change or variant"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Returns the {@link sap.ui.fl.Change} for the provided ID."
        },
        {
          name: "getDefaultVariantId",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "String",
            description: "ID of the default variant"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.comp.smartvariants.SmartVariantManagement",
                  optional: false,
                  description: "SAPUI5 Smart Variant Management control"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Retrieves the default variant for the current control synchronously. WARNING: The consumer has to make sure that the changes have already been retrieved with <code>getChanges</code>. It's recommended to use the async API <code>getDefaultVariantId</code>, which works regardless of any preconditions."
        },
        {
          name: "getExecuteOnSelect",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "boolean",
            description: "<code>ExecuteOnSelect</code> flag"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.comp.smartvariants.SmartVariantManagement",
                  optional: false,
                  description: "SAPUI5 Smart Variant Management control"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Synchronously retrieves the <code>ExecuteOnSelect</code> for the standard variant for the current control. WARNING: The consumer has to make sure that the changes have already been retrieved with <code>getChanges</code>. It's recommended to use the async API <code>getExecuteOnSelect</code>, which works regardless of any preconditions."
        },
        {
          name: "isApplicationVariant",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "boolean",
            description: "<code>true</code> if it's an application variant"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.comp.smartvariants.SmartVariantManagement",
                  optional: false,
                  description: "SAPUI5 Smart Variant Management control"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Indicates if the current application is a variant of an existing one."
        },
        {
          name: "isVariantDownport",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "boolean",
            description:
              "<code>true</code> if the variant downport scenario is enabled"
          },
          description:
            "Indicates whether the variant downport scenario is enabled or not. This scenario is only enabled if the current layer is the VENDOR layer and the URL parameter hotfix is set to <code>true</code>."
        },
        {
          name: "isVariantSharingEnabled",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "boolean",
            description: "<code>true</code> if sharing of variants is enabled"
          },
          description: "Checks whether sharing of variants is enabled."
        },
        {
          name: "isVendorLayer",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "boolean",
            description: "<code>true</code> if VENDOR layer is enabled"
          },
          description: "Indicates if the VENDOR layer is selected."
        },
        {
          name: "loadChanges",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise.<Object.<string,sap.ui.fl.Change>>",
            description:
              "Map with key <code>changeId</code> and value instance of <code>sap.ui.fl.Change</code>"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.comp.smartvariants.SmartVariantManagement",
                  optional: false,
                  description: "SAPUI5 Smart Variant Management control"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Calls the back end asynchronously and fetches all {@link sap.ui.fl.Change}s and variants pointing to this control."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply.api.UI2PersonalizationApplyAPI",
      basename: "UI2PersonalizationApplyAPI",
      resource: "sap/ui/fl/apply/api/UI2PersonalizationApplyAPI.js",
      module: "sap/ui/fl/apply/api/UI2PersonalizationApplyAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.71",
      description: "Provides an API to access UI2 personalization.",
      experimental: {
        since: "1.71"
      },
      methods: [
        {
          name: "load",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise resolving with the object stored under the passed container key and item name, or undefined in case no entry was stored for these; in case no sItemName was passed all entries known for the container key"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description:
                    "Used to retrieve the associated flex persistence"
                },
                containerKey: {
                  name: "containerKey",
                  type: "string",
                  optional: false,
                  description:
                    "The key of the container in which the personalization was stored"
                },
                itemName: {
                  name: "itemName",
                  type: "string",
                  optional: true,
                  description:
                    "The item name under which the personalization was stored"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Retrieves a personalization object stored for an application under a given container ID and item name; in case no itemName is given all items for the given container key are returned."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.apply.connectors.BaseConnector",
      basename: "BaseConnector",
      resource: "sap/ui/fl/apply/connectors/BaseConnector.js",
      module: "sap/ui/fl/apply/connectors/BaseConnector",
      export: "",
      static: true,
      visibility: "public",
      since: "1.67",
      description: "Base class for connectors.",
      experimental: {
        since: "1.67"
      }
    },
    {
      kind: "class",
      name: "sap.ui.fl.Change",
      basename: "Change",
      resource: "sap/ui/fl/Change.js",
      module: "sap/ui/fl/Change",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.base.ManagedObject",
      experimental: {
        since: "1.25.0"
      },
      "ui5-metadata": {
        stereotype: "object",
        properties: [
          {
            name: "state",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            methods: ["getState", "setState"]
          },
          {
            name: "moduleName",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            methods: ["getModuleName", "setModuleName"]
          },
          {
            name: "applyState",
            type: "int",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Describes the current state of the change regarding the application and reversion of changes. To change or retrieve the state, use the getters and setters defined in this class. Initially the state is <code>Change.applyState.INITIAL</code>.",
            methods: ["getApplyState", "setApplyState"]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
        parameters: [
          {
            name: "oFile",
            type: "object",
            optional: false,
            description: "File content and admin data"
          }
        ],
        description:
          "Flexibility change class. Stores change content and related information.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.fl.Change with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}."
        },
        {
          name: "getApplyState",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>applyState</code>"
          },
          description:
            "Gets current value of property {@link #getApplyState applyState}.\n\nDescribes the current state of the change regarding the application and reversion of changes. To change or retrieve the state, use the getters and setters defined in this class. Initially the state is <code>Change.applyState.INITIAL</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.ManagedObjectMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.fl.Change."
        },
        {
          name: "getModuleName",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>moduleName</code>"
          },
          description:
            "Gets current value of property {@link #getModuleName moduleName}."
        },
        {
          name: "getState",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>state</code>"
          },
          description: "Gets current value of property {@link #getState state}."
        },
        {
          name: "setApplyState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.Change",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iApplyState",
              type: "int",
              optional: false,
              description: "New value for property <code>applyState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getApplyState applyState}.\n\nDescribes the current state of the change regarding the application and reversion of changes. To change or retrieve the state, use the getters and setters defined in this class. Initially the state is <code>Change.applyState.INITIAL</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setModuleName",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.Change",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sModuleName",
              type: "string",
              optional: false,
              description: "New value for property <code>moduleName</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getModuleName moduleName}.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.Change",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sState",
              type: "string",
              optional: false,
              description: "New value for property <code>state</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getState state}.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.changeHandler.Base",
      basename: "Base",
      resource: "sap/ui/fl/changeHandler/Base.js",
      module: "sap/ui/fl/changeHandler/Base",
      export: "",
      static: true,
      visibility: "restricted",
      description:
        "Base functionality for all change handlers, which provides some reuse methods",
      methods: [
        {
          name: "instantiateFragment",
          visibility: "public",
          static: true,
          returnValue: {
            type: "Element[]|sap.ui.core.Element[]",
            description:
              "Array with the nodes/instances of the controls of the fragment"
          },
          parameters: [
            {
              name: "oChange",
              type: "sap.ui.fl.Change",
              optional: false,
              description:
                "Change object with instructions to be applied on the control"
            },
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                modifier: {
                  name: "modifier",
                  type: "sap.ui.core.util.reflection.BaseTreeModifier",
                  optional: false,
                  description: "Modifier for the controls"
                },
                appComponent: {
                  name: "appComponent",
                  type: "object",
                  optional: false,
                  description: "App component"
                },
                view: {
                  name: "view",
                  type: "object",
                  optional: false,
                  description: "Root view"
                }
              },
              description: "Property bag"
            }
          ],
          description: "Instantiates an XML fragment inside a change."
        },
        {
          name: "setTextInChange",
          visibility: "restricted",
          static: true,
          parameters: [
            {
              name: "oChange",
              type: "object",
              optional: false,
              description: "Change object"
            },
            {
              name: "sKey",
              type: "string",
              optional: false,
              description: "Text key"
            },
            {
              name: "sText",
              type: "string",
              optional: false,
              description: "Text value"
            },
            {
              name: "sType",
              type: "string",
              optional: false,
              description: "Translation text type, e.g. XBUT, XTIT, XTOL, XFLD"
            }
          ],
          description: "Sets a text in a change."
        }
      ]
    },
    {
      kind: "typedef",
      name: "sap.ui.fl.ComponentSelector",
      basename: "ComponentSelector",
      resource: "sap/ui/fl/library.js",
      module: "sap/ui/fl/library",
      static: true,
      visibility: "restricted",
      description:
        "Object containing information about a component if no instance is available.",
      properties: [
        {
          name: "appId",
          type: "string",
          visibility: "restricted",
          description:
            "Control object to be used as the selector for the change"
        },
        {
          name: "appVersion",
          type: "string",
          visibility: "restricted",
          description:
            "Control object to be used as the selector for the change"
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.ControlPersonalizationAPI",
      basename: "ControlPersonalizationAPI",
      resource: "sap/ui/fl/ControlPersonalizationAPI.js",
      module: "sap/ui/fl/ControlPersonalizationAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.56",
      description:
        "Provides an API to handle specific functionality for personalized changes.",
      experimental: {
        since: "1.56"
      },
      methods: [
        {
          name: "activateVariant",
          visibility: "public",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Returns Promise that resolves after the variant is updated or rejects when an error occurs"
          },
          parameters: [
            {
              name: "vElement",
              type: "sap.ui.base.ManagedObject|string",
              optional: false,
              description:
                "The component or control (instance or ID) on which the variantModel is set"
            },
            {
              name: "sVariantReference",
              type: "string",
              optional: false,
              description: "The variant reference which needs to be activated"
            }
          ],
          description:
            "Activates the passed variant applicable to the passed control/component."
        },
        {
          name: "addPersonalizationChanges",
          visibility: "public",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Returns Promise resolving to an array of successfully applied changes, after the changes have been written to the map of dirty changes and applied to the control"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                controlChanges: {
                  name: "controlChanges",
                  type: "array",
                  optional: false,
                  description:
                    "Array of control changes of type {@link sap.ui.fl.ControlPersonalizationAPI.PersonalizationChange}"
                },
                ignoreVariantManagement: {
                  name: "ignoreVariantManagement",
                  type: "boolean",
                  optional: true,
                  defaultValue: false,
                  description:
                    "If flag is set to true then variant management will be ignored"
                }
              },
              description:
                "Changes along with other settings that need to be added"
            }
          ],
          description:
            "Creates personalization changes, adds them to the flex persistence (not yet saved) and applies them to the control."
        },
        {
          name: "clearVariantParameterInURL",
          visibility: "public",
          static: true,
          parameters: [
            {
              name: "oVariantManagementControl",
              type: "sap.ui.base.ManagedObject",
              optional: true,
              description:
                "The variant management control for which the URL technical parameter has to be cleared"
            }
          ],
          description:
            "Clears URL technical parameter 'sap-ui-fl-control-variant-id' for control variants. If a variant management control is given as parameter, only parameters specific to that control are cleared."
        },
        {
          name: "hasVariantManagement",
          visibility: "public",
          static: true,
          returnValue: {
            type: "boolean",
            description:
              "Returns true if a variant management control is encompassing the given control, else false"
          },
          parameters: [
            {
              name: "oControl",
              type: "sap.ui.core.Element",
              optional: false,
              description:
                "The control which should be tested for an encompassing variant management control"
            }
          ],
          description:
            "Determines the availability of an encompassing variant management control."
        },
        {
          name: "isPersonalized",
          visibility: "public",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise resolving with true if personalization changes exists, otherwise false."
          },
          parameters: [
            {
              name: "aControls",
              type: "sap.ui.core.Element[]|map[]",
              optional: false,
              parameterProperties: {
                appComponent: {
                  name: "appComponent",
                  type: "sap.ui.core.Component",
                  optional: false,
                  description:
                    "Application component of the controls at runtime in case a map has been used"
                },
                id: {
                  name: "id",
                  type: "string",
                  optional: false,
                  description:
                    "ID of the control in case a map has been used to specify the control"
                }
              },
              description:
                "an array of instances of controls, a map with control IDs including a app component or a mixture for which personalization exists"
            },
            {
              name: "aChangeTypes",
              type: "array",
              optional: true,
              description:
                "Types of changes that have existing personalization."
            }
          ],
          description: "Checks if personalization changes exists for control."
        },
        {
          name: "resetChanges",
          visibility: "public",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves after the deletion took place and changes are reverted"
          },
          parameters: [
            {
              name: "aControls",
              type: "sap.ui.core.Element[]|map[]",
              optional: false,
              parameterProperties: {
                appComponent: {
                  name: "appComponent",
                  type: "sap.ui.core.Component",
                  optional: false,
                  description:
                    "Application component of the controls at runtime in case a map has been used"
                },
                id: {
                  name: "id",
                  type: "string",
                  optional: false,
                  description:
                    "ID of the control in case a map has been used to specify the control"
                }
              },
              description:
                "an array of instances of controls, a map with control IDs including a app component or a mixture for which the reset shall take place"
            },
            {
              name: "aChangeTypes",
              type: "String[]",
              optional: true,
              description: "Types of changes that shall be deleted"
            }
          ],
          description:
            "Deletes changes recorded for control. Changes to be deleted can be filtered by specification of change type(s)."
        },
        {
          name: "saveChanges",
          visibility: "public",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Returns Promise which is resolved when the passed array of changes have been saved"
          },
          parameters: [
            {
              name: "aChanges",
              type: "array",
              optional: false,
              description: "Array of changes to be saved"
            },
            {
              name: "oManagedObject",
              type: "sap.ui.base.ManagedObject",
              optional: false,
              description:
                "A managed object instance which has an application component responsible, on which changes need to be saved"
            }
          ],
          description:
            "Saves unsaved changes added to {@link sap.ui.fl.ChangePersistence}."
        }
      ]
    },
    {
      kind: "typedef",
      name: "sap.ui.fl.ControlPersonalizationAPI.PersonalizationChange",
      basename: "PersonalizationChange",
      resource: "sap/ui/fl/ControlPersonalizationAPI.js",
      module: "sap/ui/fl/ControlPersonalizationAPI",
      static: true,
      visibility: "restricted",
      since: "1.56",
      description:
        "Object containing attributes of a change, along with the control to which this change should be applied.",
      properties: [
        {
          name: "selectorControl",
          type: "sap.ui.core.Element",
          visibility: "restricted",
          description:
            "The control object to be used as selector for the change"
        },
        {
          name: "changeSpecificData",
          type: "object",
          visibility: "restricted",
          description:
            "The map of change-specific data to perform a flex change"
        },
        {
          name: "changeSpecificData.changeType",
          type: "string",
          visibility: "restricted",
          description:
            "The change type for which a change handler is registered"
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.descriptorRelated",
      basename: "descriptorRelated",
      resource: "sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory.js",
      module: "sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory",
      static: true,
      visibility: "restricted",
      description: "Descriptor Related"
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.descriptorRelated.api",
      basename: "api",
      resource: "sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory.js",
      module: "sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory",
      static: true,
      visibility: "restricted",
      description: "Descriptor Related Apis"
    },
    {
      kind: "enum",
      name: "sap.ui.fl.descriptorRelated.api.AnnotationsInsertPositionType",
      basename: "AnnotationsInsertPositionType",
      resource:
        "sap/ui/fl/descriptorRelated/api/DescriptorInlineChangeFactory.js",
      module: "sap/ui/fl/descriptorRelated/api/DescriptorInlineChangeFactory",
      static: true,
      visibility: "restricted",
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "BEGINNING",
          visibility: "restricted",
          static: true,
          type: "string"
        },
        {
          name: "END",
          visibility: "restricted",
          static: true,
          type: "string"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.fl.descriptorRelated.api.DescriptorChange",
      basename: "DescriptorChange",
      resource: "sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory.js",
      module: "sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory",
      static: true,
      visibility: "restricted",
      constructor: {
        visibility: "restricted",
        parameters: [
          {
            name: "mChangeFile",
            type: "object",
            optional: false,
            description: "change file"
          },
          {
            name: "oInlineChange",
            type: "sap.ui.fl.descriptorRelated.api.DescriptorInlineChange",
            optional: false,
            description: "inline change object"
          },
          {
            name: "oSettings",
            type: "sap.ui.fl.registry.Settings",
            optional: false,
            description: "settings"
          }
        ],
        description: "Descriptor Change"
      },
      methods: [
        {
          name: "getJson",
          visibility: "restricted",
          returnValue: {
            type: "object",
            description: "copy of JSON object of the descriptor change"
          },
          description:
            "Returns a copy of the JSON object of the descriptor change"
        },
        {
          name: "setPackage",
          visibility: "restricted",
          returnValue: {
            type: "Promise",
            description: "resolving when setting of package was successful"
          },
          parameters: [
            {
              name: "sPackage",
              type: "string",
              optional: false,
              description: "package"
            }
          ],
          description: "Set package (for ABAP Backend)"
        },
        {
          name: "setTransportRequest",
          visibility: "restricted",
          returnValue: {
            type: "Promise",
            description:
              "resolving when setting of transport request was successful"
          },
          parameters: [
            {
              name: "sTransportRequest",
              type: "string",
              optional: false,
              description: "transport request"
            }
          ],
          description: "Set transport request (for ABAP Backend)"
        },
        {
          name: "store",
          visibility: "restricted",
          returnValue: {
            type: "object",
            description: "change object"
          },
          description: "Stores the descriptor change in change persistence"
        },
        {
          name: "submit",
          visibility: "restricted",
          returnValue: {
            type: "Promise",
            description: "resolving after all changes have been saved"
          },
          description: "Submits the descriptor change to the backend"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.fl.descriptorRelated.api.DescriptorChangeFactory",
      basename: "DescriptorChangeFactory",
      resource: "sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory.js",
      module: "sap/ui/fl/descriptorRelated/api/DescriptorChangeFactory",
      export: "",
      static: true,
      visibility: "restricted",
      constructor: {
        visibility: "restricted",
        description: "Factory for Descriptor Changes"
      },
      methods: [
        {
          name: "createNew",
          visibility: "restricted",
          returnValue: {
            type: "Promise",
            description: "resolving the new Change instance"
          },
          parameters: [
            {
              name: "sReference",
              type: "string",
              optional: false,
              description: "the descriptor id for which the change is created"
            },
            {
              name: "oInlineChange",
              type: "object",
              optional: false,
              description: "the inline change instance"
            },
            {
              name: "sLayer",
              type: "string",
              optional: true,
              description:
                "layer of the descriptor change, when nothing passed, will set it to CUSTOMER"
            },
            {
              name: "oAppComponent",
              type: "object",
              optional: false,
              description: "application component to get the version from"
            },
            {
              name: "sTool",
              type: "string",
              optional: false,
              description:
                "tool which creates the descriptor change (e.g. RTA, DTA, FCC ...)"
            }
          ],
          description: "Creates a new descriptor change"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.fl.descriptorRelated.api.DescriptorInlineChange",
      basename: "DescriptorInlineChange",
      resource:
        "sap/ui/fl/descriptorRelated/api/DescriptorInlineChangeFactory.js",
      module: "sap/ui/fl/descriptorRelated/api/DescriptorInlineChangeFactory",
      static: true,
      visibility: "restricted",
      constructor: {
        visibility: "restricted",
        parameters: [
          {
            name: "sChangeType",
            type: "string",
            optional: false,
            description: "change type"
          },
          {
            name: "mParameters",
            type: "object",
            optional: true,
            description:
              "parameters of the inline change for the provided change type"
          },
          {
            name: "mTexts",
            type: "object",
            optional: true,
            description: "texts for the inline change"
          }
        ],
        description: "Descriptor Inline Change"
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.descriptorRelated.api.DescriptorInlineChangeFactory",
      basename: "DescriptorInlineChangeFactory",
      resource:
        "sap/ui/fl/descriptorRelated/api/DescriptorInlineChangeFactory.js",
      module: "sap/ui/fl/descriptorRelated/api/DescriptorInlineChangeFactory",
      export: "",
      static: true,
      visibility: "restricted",
      description: "Factory for Descriptor Inline Changes",
      methods: [
        {
          name: "create_app_addAnnotationsToOData",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                dataSourceId: {
                  name: "dataSourceId",
                  type: "string",
                  optional: false,
                  description:
                    "the id of the data source to be changed by adding annotations from annotations parameter"
                },
                annotations: {
                  name: "annotations",
                  type: "array",
                  optional: false,
                  description:
                    "array with ids of data sources of type 'ODataAnnotation' that should be added to the data source to be changed"
                },
                annotationsInsertPosition: {
                  name: "annotationsInsertPosition",
                  type:
                    "sap.ui.fl.descriptorRelated.api.AnnotationsInsertPositionType",
                  optional: true,
                  description:
                    "position at which the annotations should be added to the annotations of the data source to be changed (BEGINNING/END, default BEGINNING)"
                },
                dataSource: {
                  name: "dataSource",
                  type: "object",
                  optional: false,
                  description:
                    "one or several data sources of type 'ODataAnnotation' which should be added, all need to be contained in the annotations parameter"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_addAnnotationsToOData"
        },
        {
          name: "create_app_addCdsViews",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                cdsViews: {
                  name: "cdsViews",
                  type: "array",
                  optional: false,
                  description: "the cdsViews"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_addCdsViews"
        },
        {
          name: "create_app_addNewDataSource",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                dataSource: {
                  name: "dataSource",
                  type: "object",
                  optional: false,
                  description:
                    "the data source to be created according to descriptor schema (either one data source or one of type OData and one of type ODataAnnotation)"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_addNewDataSource"
        },
        {
          name: "create_app_addNewInbound",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                inbound: {
                  name: "inbound",
                  type: "object",
                  optional: false,
                  description:
                    "the inbound to be created according to descriptor schema"
                }
              },
              description: "parameters of the change type"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "texts for the inline change"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_addNewInbound"
        },
        {
          name: "create_app_addNewOutbound",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                outbound: {
                  name: "outbound",
                  type: "object",
                  optional: false,
                  description:
                    "the outbound to be created according to descriptor schema"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_addNewOutbound"
        },
        {
          name: "create_app_addTechnicalAttributes",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                technicalAttributes: {
                  name: "technicalAttributes",
                  type: "array",
                  optional: false,
                  description: "the technicalAttributes"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_addTechnicalAttributes"
        },
        {
          name: "create_app_changeDataSource",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                dataSourceId: {
                  name: "dataSourceId",
                  type: "string",
                  optional: false,
                  description: "the id of the data source to be changed"
                },
                entityPropertyChange: {
                  name: "entityPropertyChange",
                  type: "object|array",
                  optional: false,
                  parameterProperties: {
                    propertyPath: {
                      name: "propertyPath",
                      type: "object",
                      optional: false,
                      description: "the property path inside the data source"
                    },
                    operation: {
                      name: "operation",
                      type: "object",
                      optional: false,
                      description:
                        "the operation (INSERT, UPDATE, UPSERT, DELETE)"
                    },
                    propertyValue: {
                      name: "propertyValue",
                      type: "object",
                      optional: false,
                      description: "the new property value"
                    }
                  },
                  description:
                    "the entity property change or an array of multiple changes"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_changeDataSource"
        },
        {
          name: "create_app_changeInbound",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                inboundId: {
                  name: "inboundId",
                  type: "string",
                  optional: false,
                  description: "the id of the inbound to be changed"
                },
                entityPropertyChange: {
                  name: "entityPropertyChange",
                  type: "object|array",
                  optional: false,
                  parameterProperties: {
                    propertyPath: {
                      name: "propertyPath",
                      type: "object",
                      optional: false,
                      description:
                        "the property path inside the inbound. If the propertyPath contains a parameter id with slash(es), each slash of the parameter id has to be escaped by exactly 2 backslashes."
                    },
                    operation: {
                      name: "operation",
                      type: "object",
                      optional: false,
                      description:
                        "the operation (INSERT, UPDATE, UPSERT, DELETE)"
                    },
                    propertyValue: {
                      name: "propertyValue",
                      type: "object",
                      optional: false,
                      description: "the new property value"
                    }
                  },
                  description:
                    "the entity property change or an array of multiple changes"
                }
              },
              description: "parameters of the change type"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "texts for the inline change"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_changeInbound"
        },
        {
          name: "create_app_changeOutbound",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                outboundId: {
                  name: "outboundId",
                  type: "string",
                  optional: false,
                  description: "the id of the outbound to be changed"
                },
                entityPropertyChange: {
                  name: "entityPropertyChange",
                  type: "object|array",
                  optional: false,
                  parameterProperties: {
                    propertyPath: {
                      name: "propertyPath",
                      type: "object",
                      optional: false,
                      description:
                        "the property path inside the outbound. If the propertyPath contains a parameter id with slash(es), each slash of the parameter id has to be escaped by exactly 2 backslashes."
                    },
                    operation: {
                      name: "operation",
                      type: "object",
                      optional: false,
                      description:
                        "the operation (INSERT, UPDATE, UPSERT, DELETE)"
                    },
                    propertyValue: {
                      name: "propertyValue",
                      type: "object",
                      optional: false,
                      description: "the new property value"
                    }
                  },
                  description:
                    "the entity property change or an array of multiple changes"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_changeOutbound"
        },
        {
          name: "create_app_removeAllInboundsExceptOne",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                inboundId: {
                  name: "inboundId",
                  type: "string",
                  optional: false,
                  description: "the id of the inbound that should be preserved"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_removeAllInboundsExceptOne"
        },
        {
          name: "create_app_removeCdsViews",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                cdsViews: {
                  name: "cdsViews",
                  type: "array",
                  optional: false,
                  description: "the cdsViews"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_removeCdsViews"
        },
        {
          name: "create_app_removeDataSource",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                dataSourceId: {
                  name: "dataSourceId",
                  type: "string",
                  optional: false,
                  description: "the id of the data source to be removed"
                },
                removeUnusedODataAnnotation: {
                  name: "removeUnusedODataAnnotation",
                  type: "boolean",
                  optional: true,
                  description:
                    "option to remove also no longer referenced dataSources of type ODataAnnotion"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_removeDataSource"
        },
        {
          name: "create_app_removeInbound",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                inboundId: {
                  name: "inboundId",
                  type: "string",
                  optional: false,
                  description: "the id of the inbound to be removed"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_removeInbound"
        },
        {
          name: "create_app_removeOutbound",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                outboundId: {
                  name: "outboundId",
                  type: "string",
                  optional: false,
                  description: "the id of the outbound to be removed"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_removeOutbound"
        },
        {
          name: "create_app_removeTechnicalAttributes",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                technicalAttributes: {
                  name: "technicalAttributes",
                  type: "array",
                  optional: false,
                  description: "the technicalAttributes"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_removeTechnicalAttributes"
        },
        {
          name: "create_app_setAch",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                ach: {
                  name: "ach",
                  type: "object",
                  optional: false,
                  description: "the ACH component"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_setAch"
        },
        {
          name: "create_app_setDescription",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                maxLength: {
                  name: "maxLength",
                  type: "object",
                  optional: false,
                  description: "max length of description"
                },
                type: {
                  name: "type",
                  type: "object",
                  optional: true,
                  defaultValue: "'XTIT'",
                  description: "type of description"
                },
                comment: {
                  name: "comment",
                  type: "object",
                  optional: true,
                  description: "comment for additional information"
                },
                value: {
                  name: "value",
                  type: "object",
                  optional: true,
                  description:
                    'map of locale and text, "" represents the default description'
                }
              },
              description: "map of text properties"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "the i18n properties file path"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_setDescription"
        },
        {
          name: "create_app_setDestination",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                destination: {
                  name: "destination",
                  type: "object",
                  optional: false,
                  description: "the destination"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_setDestination"
        },
        {
          name: "create_app_setInfo",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                maxLength: {
                  name: "maxLength",
                  type: "object",
                  optional: false,
                  description: "max length of info"
                },
                type: {
                  name: "type",
                  type: "object",
                  optional: true,
                  defaultValue: "'XTIT'",
                  description: "type of info"
                },
                comment: {
                  name: "comment",
                  type: "object",
                  optional: true,
                  description: "comment for additional information"
                },
                value: {
                  name: "value",
                  type: "object",
                  optional: true,
                  description:
                    'map of locale and text, "" represents the default info'
                }
              },
              description: "map of text properties"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_setInfo"
        },
        {
          name: "create_app_setKeywords",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                keywords: {
                  name: "keywords",
                  type: "array",
                  optional: false,
                  description: "the keywords"
                }
              },
              description: "parameters of the change type"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "texts for the inline change"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_setKeywords"
        },
        {
          name: "create_app_setShortTitle",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                maxLength: {
                  name: "maxLength",
                  type: "object",
                  optional: false,
                  description: "max length of sub title"
                },
                type: {
                  name: "type",
                  type: "object",
                  optional: true,
                  defaultValue: "'XTIT'",
                  description: "type of short title"
                },
                comment: {
                  name: "comment",
                  type: "object",
                  optional: true,
                  description: "comment for additional information"
                },
                value: {
                  name: "value",
                  type: "object",
                  optional: true,
                  description:
                    'map of locale and text, "" represents the default short title'
                }
              },
              description: "map of text properties"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "the i18n properties file path"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_setShortTitle"
        },
        {
          name: "create_app_setSubTitle",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                maxLength: {
                  name: "maxLength",
                  type: "object",
                  optional: false,
                  description: "max length of sub title"
                },
                type: {
                  name: "type",
                  type: "object",
                  optional: true,
                  defaultValue: "'XTIT'",
                  description: "type of sub title"
                },
                comment: {
                  name: "comment",
                  type: "object",
                  optional: true,
                  description: "comment for additional information"
                },
                value: {
                  name: "value",
                  type: "object",
                  optional: true,
                  description:
                    'map of locale and text, "" represents the default sub title'
                }
              },
              description: "map of text properties"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "the i18n properties file path"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_setSubTitle"
        },
        {
          name: "create_app_setTitle",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                maxLength: {
                  name: "maxLength",
                  type: "object",
                  optional: false,
                  description: "max length of title"
                },
                type: {
                  name: "type",
                  type: "object",
                  optional: true,
                  defaultValue: "'XTIT'",
                  description: "type of title"
                },
                comment: {
                  name: "comment",
                  type: "object",
                  optional: true,
                  description: "comment for additional information"
                },
                value: {
                  name: "value",
                  type: "object",
                  optional: true,
                  description:
                    'map of locale and text, "" represents the default title'
                }
              },
              description: "map of text properties"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "the i18n properties file path"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_app_setTitle"
        },
        {
          name: "create_fiori_setRegistrationIds",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                registrationIds: {
                  name: "registrationIds",
                  type: "object",
                  optional: false,
                  description: "the array of registrationId strings"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_fiori_setRegistrationIds"
        },
        {
          name: "create_flp_setConfig",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                config: {
                  name: "config",
                  type: "array",
                  optional: false,
                  description: "the config settings"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_flp_setConfig"
        },
        {
          name: "create_ovp_addNewCard",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                card: {
                  name: "card",
                  type: "object",
                  optional: false,
                  description:
                    "the card to be created according to descriptor schema"
                },
                model: {
                  name: "model",
                  type: "object",
                  optional: true,
                  description:
                    "the ui5 model to be created according to descriptor schema"
                },
                dataSource: {
                  name: "dataSource",
                  type: "object",
                  optional: true,
                  description:
                    "the data sources to be created according to descriptor schema (either not provided or of type OData or of type OData and ODataAnnotation"
                }
              },
              description: "parameters of the change type"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "texts for the inline change"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ovp_addNewCard"
        },
        {
          name: "create_ovp_changeCard",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                cardId: {
                  name: "cardId",
                  type: "string",
                  optional: false,
                  description: "the id of the card to be changed"
                },
                entityPropertyChange: {
                  name: "entityPropertyChange",
                  type: "object|array",
                  optional: false,
                  parameterProperties: {
                    propertyPath: {
                      name: "propertyPath",
                      type: "object",
                      optional: false,
                      description:
                        "the property path inside the card (Eg. '/settings/title')."
                    },
                    operation: {
                      name: "operation",
                      type: "object",
                      optional: false,
                      description:
                        "the operation (INSERT, UPDATE, UPSERT, DELETE)"
                    },
                    propertyValue: {
                      name: "propertyValue",
                      type: "object",
                      optional: false,
                      description: "the new property value"
                    }
                  },
                  description:
                    "the entity property change or an array of multiple changes"
                }
              },
              description: "parameters of the change type"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "texts for the inline change"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ovp_changeCard"
        },
        {
          name: "create_ovp_removeCard",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                cardId: {
                  name: "cardId",
                  type: "string",
                  optional: false,
                  description: "the id of the card to be removed"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ovp_removeCard"
        },
        {
          name: "create_smb_addNamespace",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                smartBusinessApp: {
                  name: "smartBusinessApp",
                  type: "object",
                  optional: false,
                  description:
                    "the smart business app to be created according to descriptor schema"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_smb_addNamespace"
        },
        {
          name: "create_smb_changeNamespace",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                smartBusinessApp: {
                  name: "smartBusinessApp",
                  type: "object",
                  optional: false,
                  description:
                    "the smart business app to be changed according to descriptor schema"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_smb_changeNamespace"
        },
        {
          name: "create_ui5_addLibraries",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                libraries: {
                  name: "libraries",
                  type: "object",
                  optional: false,
                  description: "library to be added"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ui5_addLibraries"
        },
        {
          name: "create_ui5_addNewModel",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                model: {
                  name: "model",
                  type: "object",
                  optional: false,
                  description:
                    "the ui5 model to be created according to descriptor schema"
                },
                dataSource: {
                  name: "dataSource",
                  type: "object",
                  optional: true,
                  description:
                    "the data sources to be created according to descriptor schema (either not provided or of arbitrary type or two provided of type OData and of type OData and ODataAnnotation)"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ui5_addNewModel"
        },
        {
          name: "create_ui5_addNewModelEnhanceWith",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                modelId: {
                  name: "modelId",
                  type: "string",
                  optional: false,
                  description: "the ui5 model id to be enhanced"
                }
              },
              description: "parameters of the change type"
            },
            {
              name: "texts",
              type: "object",
              optional: false,
              description: "the i18n properties file path"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ui5_addNewModelEnhanceWith"
        },
        {
          name: "create_ui5_removeModel",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                modelId: {
                  name: "modelId",
                  type: "string",
                  optional: false,
                  description: "the id of the ui5 model to be removed"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ui5_removeModel"
        },
        {
          name: "create_ui5_replaceComponentUsage",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                componentUsageId: {
                  name: "componentUsageId",
                  type: "object",
                  optional: false,
                  description: "the ui5 component usage id to be created"
                },
                componentUsage: {
                  name: "componentUsage",
                  type: "object",
                  optional: false,
                  description:
                    "the ui5 component usage data to replace the old one according to descriptor schema"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ui5_replaceComponentUsage"
        },
        {
          name: "create_ui5_setMinUI5Version",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                minUI5Version: {
                  name: "minUI5Version",
                  type: "string",
                  optional: false,
                  description: "the UI5 Version to be updated"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ui5_setMinUI5Version"
        },
        {
          name: "create_ui_generic_app_setMainPage",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                page: {
                  name: "page",
                  type: "object",
                  optional: false,
                  description:
                    "the page to be created according to descriptor schema"
                }
              },
              description: "parameters of the change type"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "texts for the inline change"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ui_generic_app_setMainPage"
        },
        {
          name: "create_ui_setDeviceTypes",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                deviceTypes: {
                  name: "deviceTypes",
                  type: "object",
                  optional: false,
                  description: "the device types"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ui_setDeviceTypes"
        },
        {
          name: "create_ui_setIcon",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                icon: {
                  name: "icon",
                  type: "object",
                  optional: false,
                  description: "the icon string"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_ui_setIcon"
        },
        {
          name: "create_url_setUri",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                uri: {
                  name: "uri",
                  type: "object",
                  optional: false,
                  description: "the uri string"
                }
              },
              description: "parameters of the change type"
            }
          ],
          description:
            "Creates an inline change of change type appdescr_url_setUri"
        },
        {
          name: "createDescriptorInlineChange",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "resolving when creating the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "sDescriptorChangeType",
              type: "string",
              optional: false,
              description: "the change type"
            },
            {
              name: "mParameters",
              type: "object",
              optional: false,
              description: "parameters of the changed type"
            },
            {
              name: "mTexts",
              type: "object",
              optional: true,
              description: "texts for the inline change"
            }
          ],
          description: "Creates an inline change"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.fl.descriptorRelated.api.DescriptorVariant",
      basename: "DescriptorVariant",
      resource: "sap/ui/fl/descriptorRelated/api/DescriptorVariantFactory.js",
      module: "sap/ui/fl/descriptorRelated/api/DescriptorVariantFactory",
      static: true,
      visibility: "restricted",
      deprecated: {
        since: "1.73"
      },
      constructor: {
        visibility: "restricted",
        parameters: [
          {
            name: "mParameters",
            type: "object",
            optional: false,
            parameterProperties: {
              id: {
                name: "id",
                type: "string",
                optional: false,
                description:
                  "the id of the app variant id to be provided for a new app variant and for deleting a app variant"
              },
              reference: {
                name: "reference",
                type: "string",
                optional: false,
                description:
                  "the proposed referenced descriptor or app variant id (might be overwritten by the backend) to be provided when creating a new app variant"
              },
              version: {
                name: "version",
                type: "string",
                optional: true,
                description: "version of the app variant (optional)"
              },
              layer: {
                name: "layer",
                type: "string",
                optional: true,
                defaultValue: "'CUSTOMER'",
                description:
                  "the proposed layer (might be overwritten by the backend) when creating a new app variant"
              }
            },
            description: "parameters"
          },
          {
            name: "mFileContent",
            type: "object",
            optional: false,
            description:
              "file content of the existing app variant to be provided if app variant shall be created from an existing"
          },
          {
            name: "bDeletion",
            type: "boolean",
            optional: true,
            defaultValue: false,
            description:
              "deletion indicator to be provided if app variant shall be deleted"
          },
          {
            name: "oSettings",
            type: "sap.ui.fl.registry.Settings",
            optional: false,
            description: "settings"
          }
        ],
        description: "App variant"
      },
      methods: [
        {
          name: "addDescriptorInlineChange",
          visibility: "restricted",
          returnValue: {
            type: "Promise",
            description:
              "resolving when adding the descriptor inline change was successful (without backend access)"
          },
          parameters: [
            {
              name: "oDescriptorInlineChange",
              type: "sap.ui.fl.descriptorRelated.api.DescriptorInlineChange",
              optional: false,
              description: "the inline change"
            }
          ],
          description: "Adds a descriptor inline change to the app variant",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "getJson",
          visibility: "restricted",
          returnValue: {
            type: "object",
            description: "copy of JSON object of the app variant"
          },
          description: "Returns a copy of the JSON object of the app variant",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "setPackage",
          visibility: "restricted",
          returnValue: {
            type: "Promise",
            description: "resolving when setting of package was successful"
          },
          parameters: [
            {
              name: "sPackage",
              type: "string",
              optional: false,
              description: "ABAP package"
            }
          ],
          description: "Set package (for ABAP Backend)",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "setReference",
          visibility: "restricted",
          parameters: [
            {
              name: "sReference",
              type: "string",
              optional: false,
              description: "the new reference"
            }
          ],
          description: "Set the reference of the app variant",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "setTransportRequest",
          visibility: "restricted",
          returnValue: {
            type: "Promise",
            description:
              "resolving when setting of transport request was successful"
          },
          parameters: [
            {
              name: "sTransportRequest",
              type: "string",
              optional: false,
              description: "ABAP transport request"
            }
          ],
          description: "Set transport request (for ABAP Backend)",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "submit",
          visibility: "restricted",
          returnValue: {
            type: "Promise",
            description:
              "resolving when submitting the app variant was successful Since this method is only called for app variants on ABAP platform, the direct usage of write LrepConnector is triggered."
          },
          description: "Submits the app variant to the backend",
          deprecated: {
            since: "1.73"
          }
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.descriptorRelated.api.DescriptorVariantFactory",
      basename: "DescriptorVariantFactory",
      resource: "sap/ui/fl/descriptorRelated/api/DescriptorVariantFactory.js",
      module: "sap/ui/fl/descriptorRelated/api/DescriptorVariantFactory",
      export: "",
      static: true,
      visibility: "restricted",
      description: "Factory for App variants",
      deprecated: {
        since: "1.73"
      },
      methods: [
        {
          name: "createAppVariant",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description: "resolving the new DescriptorVariant instance"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                reference: {
                  name: "reference",
                  type: "string",
                  optional: false,
                  description:
                    "the proposed referenced descriptor or app variant id (might be overwritten by the backend)"
                },
                id: {
                  name: "id",
                  type: "string",
                  optional: false,
                  description: "the id for the app variant id"
                },
                version: {
                  name: "version",
                  type: "string",
                  optional: false,
                  description: "optional version of the app variant"
                },
                layer: {
                  name: "layer",
                  type: "string",
                  optional: true,
                  defaultValue: "'CUSTOMER'",
                  description:
                    "the proposed layer for the app variant (might be overwritten by the backend)"
                },
                skipIam: {
                  name: "skipIam",
                  type: "boolean",
                  optional: true,
                  defaultValue: false,
                  description:
                    "indicator whether the default IAM item creation and registration is skipped"
                }
              },
              description: "the parameters"
            }
          ],
          description: "Creates a new app variant",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "createDeletion",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description: "resolving the DescriptorVariant instance"
          },
          parameters: [
            {
              name: "sId",
              type: "string",
              optional: false,
              description: "the id of the app variant"
            }
          ],
          description: "Creates an app variant deletion",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "createForExisting",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description: "resolving the DescriptorVariant instance"
          },
          parameters: [
            {
              name: "sId",
              type: "string",
              optional: false,
              description: "the id of the app variant"
            }
          ],
          description:
            "Creates an app variant instance for an existing app variant",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "createFromJson",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description: "resolving the DescriptorVariant instance"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              description: "DT content of app variant"
            }
          ],
          description: "Creates a app variant instance from a json",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "createNew",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description: "resolving the new DescriptorVariant instance"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: false,
              parameterProperties: {
                reference: {
                  name: "reference",
                  type: "string",
                  optional: false,
                  description:
                    "the proposed referenced descriptor or app variant id (might be overwritten by the backend)"
                },
                id: {
                  name: "id",
                  type: "string",
                  optional: false,
                  description: "the id for the app variant id"
                },
                version: {
                  name: "version",
                  type: "string",
                  optional: false,
                  description: "optional version of the app variant"
                },
                layer: {
                  name: "layer",
                  type: "string",
                  optional: true,
                  defaultValue: "'CUSTOMER'",
                  description:
                    "the proposed layer for the app variant (might be overwritten by the backend)"
                },
                skipIam: {
                  name: "skipIam",
                  type: "boolean",
                  optional: true,
                  defaultValue: false,
                  description:
                    "indicator whether the default IAM item creation and registration is skipped"
                }
              },
              description: "the parameters"
            }
          ],
          description: "Creates a new app variant",
          deprecated: {
            since: "1.73"
          }
        },
        {
          name: "loadAppVariant",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description: "resolving the DescriptorVariant instance"
          },
          parameters: [
            {
              name: "sId",
              type: "string",
              optional: false,
              description: "the id of the app variant"
            },
            {
              name: "bDeletion",
              type: "boolean",
              optional: false,
              description: "required for deletion"
            },
            {
              name: "sLayer",
              type: "string",
              optional: true,
              description:
                "Current layer (required to determine the connector later in Storage)"
            },
            {
              name: "bIsForSapDelivery",
              type: "string",
              optional: true,
              defaultValue: false,
              description:
                "Determines whether app variant deletion is intended for SAP delivery"
            }
          ],
          description:
            "Loads an existing app variant from backend and prepare a map for either creation or deletion",
          deprecated: {
            since: "1.73"
          }
        }
      ]
    },
    {
      kind: "typedef",
      name: "sap.ui.fl.ElementSelector",
      basename: "ElementSelector",
      resource: "sap/ui/fl/library.js",
      module: "sap/ui/fl/library",
      static: true,
      visibility: "restricted",
      description:
        "Object containing information about a control if no instance is available.",
      properties: [
        {
          name: "elementId",
          type: "string",
          visibility: "restricted",
          description: "Control ID"
        },
        {
          name: "elementType",
          type: "string",
          visibility: "restricted",
          description: "Control type"
        },
        {
          name: "appComponent",
          type: "sap.ui.core.Component",
          visibility: "restricted",
          description:
            "Instance of the app component in which the control is running"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.fl.LrepConnector",
      basename: "LrepConnector",
      resource: "sap/ui/fl/LrepConnector.js",
      module: "sap/ui/fl/LrepConnector",
      export: "",
      static: true,
      visibility: "restricted",
      deprecated: {},
      constructor: {
        visibility: "restricted",
        parameters: [
          {
            name: "mParameters",
            type: "object",
            optional: true,
            parameterProperties: {
              XsrfToken: {
                name: "XsrfToken",
                type: "String",
                optional: true,
                description:
                  "XSRF token which can be reused for back-end connectivity. If no XSRF token is passed, a new one will be fetched from back end."
              }
            },
            description: "map of parameters, see below"
          }
        ],
        description:
          "Provides the connectivity to the LRep & UI5 Flexibility Services REST-routes"
      },
      methods: [
        {
          name: "getFileAttributes",
          visibility: "public",
          returnValue: {
            type: "Object",
            description: "Returns the result from the request"
          },
          parameters: [
            {
              name: "sNamespace",
              type: "String",
              optional: false,
              description:
                'The abap package goes here. It is needed to identify the change. Default LREP namespace is "localchange".'
            },
            {
              name: "sName",
              type: "String",
              optional: false,
              description: "Name of the change"
            },
            {
              name: "sType",
              type: "String",
              optional: false,
              description: "File type extension"
            },
            {
              name: "sLayer",
              type: "String",
              optional: false,
              description: "File layer"
            }
          ],
          description:
            "Retrieves the file attributes for a given resource in the LREP.",
          deprecated: {}
        },
        {
          name: "loadSettings",
          visibility: "public",
          returnValue: {
            type: "Promise",
            description:
              "Returns a Promise with the flexibility settings content"
          },
          description: "Loads flexibility settings.",
          deprecated: {}
        },
        {
          name: "send",
          visibility: "public",
          returnValue: {
            type: "Promise",
            description: "Returns a promise to the result of the request"
          },
          parameters: [
            {
              name: "sUri",
              type: "String",
              optional: false,
              description: "Relative URL for this request"
            },
            {
              name: "sMethod",
              type: "String",
              optional: true,
              description:
                "HTTP-method to be used by this request (default GET)"
            },
            {
              name: "oData",
              type: "Object",
              optional: true,
              description: "Payload of the request"
            },
            {
              name: "mOptions",
              type: "Object",
              optional: true,
              description:
                "Additional options which should be used in the request"
            }
          ],
          description: "Send a request to the back end",
          deprecated: {}
        }
      ]
    },
    {
      kind: "typedef",
      name: "sap.ui.fl.Selector",
      basename: "Selector",
      resource: "sap/ui/fl/library.js",
      module: "sap/ui/fl/library",
      static: true,
      visibility: "restricted",
      since: "1.69",
      description:
        "The object a change is targeted at. This can be a {@link sap.ui.core.Element} or a {@link sap.ui.core.Component} instance or an object like {@link sap.ui.fl.ElementSelector} or {@link sap.ui.fl.ComponentSelector} containing information about the element or component."
    },
    {
      kind: "class",
      name: "sap.ui.fl.transport.TransportDialog",
      basename: "TransportDialog",
      resource: "sap/ui/fl/transport/TransportDialog.js",
      module: "sap/ui/fl/transport/TransportDialog",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.fl.write._internal.transport.TransportDialog",
      description:
        "The Transport Dialog Control can be used to implement a value help for selecting an ABAP package and transport request. It is not a generic utility, but part of the Variantmanament and therefore cannot be used in any other application.",
      deprecated: {
        since: "1.74",
        text:
          "The TransportDialog should be used only internally inside the <code>sap.ui.fl</code> library."
      },
      "ui5-metamodel": true,
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description: "Constructor for a new transport/TransportDialog."
      }
    },
    {
      kind: "class",
      name: "sap.ui.fl.Utils.FakePromise",
      basename: "FakePromise",
      resource: "sap/ui/fl/Utils.js",
      module: "sap/ui/fl/Utils",
      export: "FakePromise",
      static: true,
      visibility: "restricted",
      constructor: {
        visibility: "restricted",
        parameters: [
          {
            name: "vInitialValue",
            type: "any",
            optional: false,
            description: "value on resolve FakePromise"
          },
          {
            name: "vError",
            type: "any",
            optional: false,
            description: "value on reject FakePromise"
          },
          {
            name: "sInitialPromiseIdentifier",
            type: "string",
            optional: false,
            description:
              "value identifies previous promise in chain. If the identifier is passed to the function and don't match with the FakePromiseIdentifier then native Promise execution is used for further processing"
          }
        ],
        description:
          "Class that behaves like a promise (es6), but is synchronous. Implements <code>then</code> and <code>catch</code> functions. After instantiating can be used similar to standard Promises but synchronously. As soon as one of the callback functions returns a Promise the asynchronous Promise replaces the FakePromise in further processing."
      }
    },
    {
      kind: "typedef",
      name: "sap.ui.fl.variants.SwitchChanges",
      basename: "SwitchChanges",
      resource: "sap/ui/fl/variants/VariantController.js",
      module: "sap/ui/fl/variants/VariantController",
      static: true,
      visibility: "public",
      description:
        "Returns the map with all changes to be reverted and applied when switching variants.",
      returnValue: {
        type: "sap.ui.fl.variants.SwitchChanges",
        description:
          "Map containing all changes to be reverted and all new changes"
      },
      parameters: [
        {
          name: "mPropertyBag",
          type: "object",
          optional: false,
          parameterProperties: {
            variantManagementReference: {
              name: "variantManagementReference",
              type: "string",
              optional: false,
              description: "Variant management ID"
            },
            currentVariantReference: {
              name: "currentVariantReference",
              type: "string",
              optional: false,
              description: "The ID of the currently used variant"
            },
            newVariantReference: {
              name: "newVariantReference",
              type: "string",
              optional: false,
              description: "ID of the newly selected variant"
            },
            changesMap: {
              name: "changesMap",
              type: "object",
              optional: false,
              description: "Changes inside the current changes map"
            }
          },
          description: "Additional properties for variant switch"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.fl.variants.VariantManagement",
      basename: "VariantManagement",
      resource: "sap/ui/fl/variants/VariantManagement.js",
      module: "sap/ui/fl/variants/VariantManagement",
      export: "",
      static: true,
      visibility: "public",
      since: "1.56",
      extends: "sap.ui.core.Control",
      description:
        'Can be used to manage variants. You can use this control in most controls that are enabled for <i>key user adaptation</i>.<br> <b>Note: </b>On the user interface, variants are generally referred to as "views".',
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "showExecuteOnSelection",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates that <i>Apply Automatically</i> is visible in the <i>Save View</i> and the <i>Manage Views</i> dialogs.",
            methods: ["getShowExecuteOnSelection", "setShowExecuteOnSelection"]
          },
          {
            name: "showSetAsDefault",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates that <i>Set as Default</i> is visible in the <i>Save View</i> and the <i>Manage Views</i> dialogs.",
            methods: ["getShowSetAsDefault", "setShowSetAsDefault"]
          },
          {
            name: "manualVariantKey",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "If set to <code>true</code>, the key for a vendor variant will be added manually.<br> <b>Note:</b>This flag is only used internally in the app variant scenarios.",
            methods: ["getManualVariantKey", "setManualVariantKey"]
          },
          {
            name: "inErrorState",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates that the control is in error state. If set to <code>true</code>, an error message will be displayed whenever the variant is opened.",
            methods: ["getInErrorState", "setInErrorState"]
          },
          {
            name: "editable",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates that the control is in edit state. If set to <code>false</code>, the footer of the <i>Views</i> list will be hidden.",
            methods: ["getEditable", "setEditable"]
          },
          {
            name: "modelName",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Determines the name of the model. The binding context will be defined by the current ID. <p> <b>Note:</b> In a UI adaptation scenario, this property is not used at all, because the model name is <code>$FlexVariants</code>.",
            methods: ["getModelName", "setModelName"]
          },
          {
            name: "updateVariantInURL",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Determines the intention of setting the current variant based on passed information. <p> <b>Note:</b> The <code>VariantManagement</code> control does not react in any way to this property.",
            methods: ["getUpdateVariantInURL", "setUpdateVariantInURL"]
          },
          {
            name: "resetOnContextChange",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "When set to false, doesn't reset the <code>VariantManagement</code> control to the default variant, when its binding context is changed.",
            methods: ["getResetOnContextChange", "setResetOnContextChange"]
          }
        ],
        associations: [
          {
            name: "for",
            singularName: "for",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Contains the controls for which the variant management is responsible.",
            methods: ["getFor", "addFor", "removeFor", "removeAllFor"]
          }
        ],
        events: [
          {
            name: "save",
            visibility: "public",
            description:
              "This event is fired when the <i>Save View</i> dialog is closed with <i>OK</i> for a variant.",
            parameters: {
              name: {
                name: "name",
                type: "string",
                description: "Variant title"
              },
              overwrite: {
                name: "overwrite",
                type: "boolean",
                description:
                  "Indicates if an existing variant is overwritten or if a new variant is created."
              },
              key: {
                name: "key",
                type: "string",
                description: "Variant key"
              },
              execute: {
                name: "execute",
                type: "boolean",
                description: "<i>Apply Automatically</i> indicator"
              },
              def: {
                name: "def",
                type: "boolean",
                description: "The default variant indicator"
              }
            },
            methods: ["attachSave", "detachSave", "fireSave"]
          },
          {
            name: "manage",
            visibility: "public",
            description:
              "This event is fired when users apply changes to variants in the <i>Manage Views</i> dialog.",
            methods: ["attachManage", "detachManage", "fireManage"]
          },
          {
            name: "initialized",
            visibility: "public",
            description:
              "This event is fired when the model and context are set.",
            methods: [
              "attachInitialized",
              "detachInitialized",
              "fireInitialized"
            ]
          },
          {
            name: "select",
            visibility: "public",
            description: "This event is fired when a new variant is selected.",
            parameters: {
              key: {
                name: "key",
                type: "string",
                description: "Variant key"
              }
            },
            methods: ["attachSelect", "detachSelect", "fireSelect"]
          }
        ],
        designtime: "sap/ui/fl/designtime/variants/VariantManagement.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>VariantManagement</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:f1430c0337534d469da3a56307ff76af Key User Adaptation: Enable Your App}"
        ]
      },
      events: [
        {
          name: "initialized",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false
                }
              }
            }
          ],
          description: "This event is fired when the model and context are set."
        },
        {
          name: "manage",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false
                }
              }
            }
          ],
          description:
            "This event is fired when users apply changes to variants in the <i>Manage Views</i> dialog."
        },
        {
          name: "save",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    name: {
                      name: "name",
                      type: "string",
                      optional: false,
                      description: "Variant title"
                    },
                    overwrite: {
                      name: "overwrite",
                      type: "boolean",
                      optional: false,
                      description:
                        "Indicates if an existing variant is overwritten or if a new variant is created."
                    },
                    key: {
                      name: "key",
                      type: "string",
                      optional: false,
                      description: "Variant key"
                    },
                    execute: {
                      name: "execute",
                      type: "boolean",
                      optional: false,
                      description: "<i>Apply Automatically</i> indicator"
                    },
                    def: {
                      name: "def",
                      type: "boolean",
                      optional: false,
                      description: "The default variant indicator"
                    }
                  }
                }
              }
            }
          ],
          description:
            "This event is fired when the <i>Save View</i> dialog is closed with <i>OK</i> for a variant."
        },
        {
          name: "select",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    key: {
                      name: "key",
                      type: "string",
                      optional: false,
                      description: "Variant key"
                    }
                  }
                }
              }
            }
          ],
          description: "This event is fired when a new variant is selected."
        }
      ],
      methods: [
        {
          name: "addFor",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vFor",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The for to add; if empty, nothing is inserted"
            }
          ],
          description: "Adds some for into the association {@link #getFor for}."
        },
        {
          name: "attachInitialized",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:initialized initialized} event of this <code>sap.ui.fl.variants.VariantManagement</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.\n\nThis event is fired when the model and context are set."
        },
        {
          name: "attachManage",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:manage manage} event of this <code>sap.ui.fl.variants.VariantManagement</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.\n\nThis event is fired when users apply changes to variants in the <i>Manage Views</i> dialog."
        },
        {
          name: "attachSave",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:save save} event of this <code>sap.ui.fl.variants.VariantManagement</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.\n\nThis event is fired when the <i>Save View</i> dialog is closed with <i>OK</i> for a variant."
        },
        {
          name: "attachSelect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:select select} event of this <code>sap.ui.fl.variants.VariantManagement</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.\n\nThis event is fired when a new variant is selected."
        },
        {
          name: "detachInitialized",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:initialized initialized} event of this <code>sap.ui.fl.variants.VariantManagement</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachManage",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:manage manage} event of this <code>sap.ui.fl.variants.VariantManagement</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSave",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:save save} event of this <code>sap.ui.fl.variants.VariantManagement</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSelect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:select select} event of this <code>sap.ui.fl.variants.VariantManagement</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.fl.variants.VariantManagement with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireInitialized",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:initialized initialized} to attached listeners."
        },
        {
          name: "fireManage",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:manage manage} to attached listeners."
        },
        {
          name: "fireSave",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                name: {
                  name: "name",
                  type: "string",
                  optional: true,
                  description: "Variant title"
                },
                overwrite: {
                  name: "overwrite",
                  type: "boolean",
                  optional: true,
                  description:
                    "Indicates if an existing variant is overwritten or if a new variant is created."
                },
                key: {
                  name: "key",
                  type: "string",
                  optional: true,
                  description: "Variant key"
                },
                execute: {
                  name: "execute",
                  type: "boolean",
                  optional: true,
                  description: "<i>Apply Automatically</i> indicator"
                },
                def: {
                  name: "def",
                  type: "boolean",
                  optional: true,
                  description: "The default variant indicator"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:save save} to attached listeners."
        },
        {
          name: "fireSelect",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                key: {
                  name: "key",
                  type: "string",
                  optional: true,
                  description: "Variant key"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:select select} to attached listeners."
        },
        {
          name: "getCurrentVariantKey",
          visibility: "public",
          returnValue: {
            type: "String",
            description:
              "Key of the currently selected variant. In case the model is not yet set <code>null</code> will be returned."
          },
          description: "Gets the currently selected variant key."
        },
        {
          name: "getEditable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>editable</code>"
          },
          description:
            "Gets current value of property {@link #getEditable editable}.\n\nIndicates that the control is in edit state. If set to <code>false</code>, the footer of the <i>Views</i> list will be hidden.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFor",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]"
          },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getFor for}."
        },
        {
          name: "getInErrorState",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>inErrorState</code>"
          },
          description:
            "Gets current value of property {@link #getInErrorState inErrorState}.\n\nIndicates that the control is in error state. If set to <code>true</code>, an error message will be displayed whenever the variant is opened.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getManualVariantKey",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>manualVariantKey</code>"
          },
          description:
            "Gets current value of property {@link #getManualVariantKey manualVariantKey}.\n\nIf set to <code>true</code>, the key for a vendor variant will be added manually.<br> <b>Note:</b>This flag is only used internally in the app variant scenarios.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.fl.variants.VariantManagement."
        },
        {
          name: "getModelName",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>modelName</code>"
          },
          description:
            "Gets current value of property {@link #getModelName modelName}.\n\nDetermines the name of the model. The binding context will be defined by the current ID. <p> <b>Note:</b> In a UI adaptation scenario, this property is not used at all, because the model name is <code>$FlexVariants</code>."
        },
        {
          name: "getResetOnContextChange",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>resetOnContextChange</code>"
          },
          description:
            "Gets current value of property {@link #getResetOnContextChange resetOnContextChange}.\n\nWhen set to false, doesn't reset the <code>VariantManagement</code> control to the default variant, when its binding context is changed.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowExecuteOnSelection",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showExecuteOnSelection</code>"
          },
          description:
            "Gets current value of property {@link #getShowExecuteOnSelection showExecuteOnSelection}.\n\nIndicates that <i>Apply Automatically</i> is visible in the <i>Save View</i> and the <i>Manage Views</i> dialogs.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowSetAsDefault",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showSetAsDefault</code>"
          },
          description:
            "Gets current value of property {@link #getShowSetAsDefault showSetAsDefault}.\n\nIndicates that <i>Set as Default</i> is visible in the <i>Save View</i> and the <i>Manage Views</i> dialogs.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getTitle",
          visibility: "protected",
          returnValue: {
            type: "sap.m.Title",
            description:
              "Title part of the <code>VariantManagement</code> control."
          },
          description:
            "Returns the title control of the <code>VariantManagement</code>. This is used in the key user scenario."
        },
        {
          name: "getUpdateVariantInURL",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>updateVariantInURL</code>"
          },
          description:
            "Gets current value of property {@link #getUpdateVariantInURL updateVariantInURL}.\n\nDetermines the intention of setting the current variant based on passed information. <p> <b>Note:</b> The <code>VariantManagement</code> control does not react in any way to this property.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getVariants",
          visibility: "public",
          returnValue: {
            type: "array",
            description:
              "All variants. In case the model is not yet set, an empty array will be returned."
          },
          description: "Retrieves all variants."
        },
        {
          name: "openManagementDialog",
          visibility: "public",
          parameters: [
            {
              name: "bCreateAlways",
              type: "boolean",
              optional: false,
              description:
                "Indicates that if this is set to <code>true</code>, the former dialog will be destroyed before a new one is created"
            }
          ],
          description: "Opens the <i>Manage Views</i> dialog."
        },
        {
          name: "removeAllFor",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getFor for}."
        },
        {
          name: "removeFor",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed for or <code>null</code>"
          },
          parameters: [
            {
              name: "vFor",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The for to be removed or its index or ID"
            }
          ],
          description:
            "Removes an for from the association named {@link #getFor for}."
        },
        {
          name: "setCurrentVariantKey",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Current instance of {@link sap.ui.fl.variants.VariantManagement}."
          },
          parameters: [
            {
              name: "sKey",
              type: "String",
              optional: false,
              description: "Key of the variant that should be selected."
            }
          ],
          description: "Sets the new selected variant."
        },
        {
          name: "setEditable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEditable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>editable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEditable editable}.\n\nIndicates that the control is in edit state. If set to <code>false</code>, the footer of the <i>Views</i> list will be hidden.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setInErrorState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bInErrorState",
              type: "boolean",
              optional: false,
              description: "New value for property <code>inErrorState</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getInErrorState inErrorState}.\n\nIndicates that the control is in error state. If set to <code>true</code>, an error message will be displayed whenever the variant is opened.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setManualVariantKey",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bManualVariantKey",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>manualVariantKey</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getManualVariantKey manualVariantKey}.\n\nIf set to <code>true</code>, the key for a vendor variant will be added manually.<br> <b>Note:</b>This flag is only used internally in the app variant scenarios.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setModelName",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sModelName",
              type: "string",
              optional: false,
              description: "New value for property <code>modelName</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getModelName modelName}.\n\nDetermines the name of the model. The binding context will be defined by the current ID. <p> <b>Note:</b> In a UI adaptation scenario, this property is not used at all, because the model name is <code>$FlexVariants</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setResetOnContextChange",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bResetOnContextChange",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>resetOnContextChange</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getResetOnContextChange resetOnContextChange}.\n\nWhen set to false, doesn't reset the <code>VariantManagement</code> control to the default variant, when its binding context is changed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowExecuteOnSelection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowExecuteOnSelection",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showExecuteOnSelection</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowExecuteOnSelection showExecuteOnSelection}.\n\nIndicates that <i>Apply Automatically</i> is visible in the <i>Save View</i> and the <i>Manage Views</i> dialogs.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowSetAsDefault",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowSetAsDefault",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showSetAsDefault</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowSetAsDefault showSetAsDefault}.\n\nIndicates that <i>Set as Default</i> is visible in the <i>Save View</i> and the <i>Manage Views</i> dialogs.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setUpdateVariantInURL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.variants.VariantManagement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUpdateVariantInURL",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>updateVariantInURL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUpdateVariantInURL updateVariantInURL}.\n\nDetermines the intention of setting the current variant based on passed information. <p> <b>Note:</b> The <code>VariantManagement</code> control does not react in any way to this property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.fl.variants.VariantModel",
      basename: "VariantModel",
      resource: "sap/ui/fl/variants/VariantModel.js",
      module: "sap/ui/fl/variants/VariantModel",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.50",
      extends: "sap.ui.model.json.JSONModel",
      description: "Variant model implementation for JSON format.",
      experimental: {
        since: "1.50",
        text:
          "This class is experimental and provides only limited functionality. Also the API might be changed in future."
      },
      "ui5-metadata": {
        stereotype: "object"
      },
      constructor: {
        visibility: "restricted",
        parameters: [
          {
            name: "oData",
            type: "object",
            optional: false,
            description:
              "Either the URL where to load the JSON from or a JS object"
          },
          {
            name: "oFlexController",
            type: "sap.ui.fl.FlexController",
            optional: false,
            description:
              "<code>FlexController</code> instance for the component which uses the variant model"
          },
          {
            name: "oAppComponent",
            type: "sap.ui.core.Component",
            optional: false,
            description:
              "Application component instance that is currently loading"
          },
          {
            name: "bObserve",
            type: "boolean",
            optional: false,
            description:
              "Indicates whether to observe the JSON data for property changes (experimental)"
          }
        ],
        description:
          "Constructor for a new sap.ui.fl.variants.VariantModel model."
      },
      methods: [
        {
          name: "checkDirtyStateForControlModels",
          visibility: "public",
          parameters: [
            {
              name: "aVariantManagementReferences",
              type: "string[]",
              optional: false,
              description: "Array of variant management references"
            }
          ],
          description:
            "Checks if dirty changes exist for the current variant inside the passed variant management reference. If no dirty changes exist, it marks the associated 'modified' model property to <code>false</code>."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.fl.variants.VariantModel with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.model.json.JSONModel.extend}."
        },
        {
          name: "getCurrentVariantReference",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Current variant reference"
          },
          parameters: [
            {
              name: "sVariantManagementReference",
              type: "string",
              optional: false,
              description: "Variant management reference"
            }
          ],
          description:
            "Returns the current variant for a given variant management control."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.fl.variants.VariantModel."
        },
        {
          name: "manageVariants",
          visibility: "public",
          returnValue: {
            type: "Promise",
            description:
              'Promise which resolves when "manage" event is fired from the variant management control'
          },
          parameters: [
            {
              name: "oVariantManagementControl",
              type: "sap.ui.fl.variants.VariantManagement",
              optional: false,
              description: "Variant management control"
            },
            {
              name: "sVariantManagementReference",
              type: "String",
              optional: false,
              description: "Variant management reference"
            },
            {
              name: "sLayer",
              type: "String",
              optional: false,
              description: "Current layer"
            }
          ],
          description:
            "Opens the <i>Manage Views</i> dialog. Returns a promise which resolves to changes made from the manage dialog, based on the parameters passed."
        },
        {
          name: "setVariantProperties",
          visibility: "public",
          returnValue: {
            type: "sap.ui.fl.Change|null",
            description:
              "Created change object or <code>null</code> if no change is created"
          },
          parameters: [
            {
              name: "sVariantManagementReference",
              type: "sap.ui.fl.variants.VariantManagement",
              optional: false,
              description: "Variant management reference"
            },
            {
              name: "mPropertyBag",
              type: "Object",
              optional: false,
              parameterProperties: {
                variantReference: {
                  name: "variantReference",
                  type: "String",
                  optional: false,
                  description:
                    "Variant reference for which properties should be set"
                },
                changeType: {
                  name: "changeType",
                  type: "String",
                  optional: false,
                  description:
                    "Change type due to which properties are being set"
                },
                layer: {
                  name: "layer",
                  type: "String",
                  optional: false,
                  description: "Current layer"
                },
                appComponent: {
                  name: "appComponent",
                  type: "String",
                  optional: false,
                  description: "App component instance"
                },
                title: {
                  name: "title",
                  type: "String",
                  optional: true,
                  description:
                    "New app title value for <code>setTitle</code> change type"
                },
                visible: {
                  name: "visible",
                  type: "boolean",
                  optional: true,
                  description:
                    "New visible value for <code>setVisible</code> change type"
                },
                favorite: {
                  name: "favorite",
                  type: "boolean",
                  optional: true,
                  description:
                    "New favorite value for <code>setFavorite</code> change type"
                },
                defaultVariant: {
                  name: "defaultVariant",
                  type: "String",
                  optional: true,
                  description:
                    "New default variant for <code>setDefault</code> change type"
                },
                change: {
                  name: "change",
                  type: "sap.ui.fl.Change",
                  optional: true,
                  description: "Change to be deleted"
                }
              },
              description: "Map of properties"
            },
            {
              name: "bAddChange",
              type: "boolean",
              optional: true,
              description: "Indicates whether change needs to be added"
            }
          ],
          description:
            "Sets the passed properties on a variant for the passed variant management reference. Also adds or removes a change depending on the parameters passed."
        }
      ]
    },
    {
      kind: "typedef",
      name: "sap.ui.fl.Version",
      basename: "Version",
      resource: "sap/ui/fl/library.js",
      module: "sap/ui/fl/library",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description: "Object containing information about a version.",
      properties: [
        {
          name: "versionNumber",
          type: "number",
          visibility: "restricted",
          description:
            "Number of the version. The highest version is the active while 0 is the draft"
        },
        {
          name: "activatedBy",
          type: "string",
          visibility: "restricted",
          description: "User ID who activated the version"
        },
        {
          name: "activatedAt",
          type: "string",
          visibility: "restricted",
          description: "Stringified time stamp of the activation"
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.CompatibilityConnector",
      basename: "CompatibilityConnector",
      resource: "sap/ui/fl/write/_internal/CompatibilityConnector.js",
      module: "sap/ui/fl/write/_internal/CompatibilityConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.71",
      description:
        "Adapts the existing @see sap.ui.fl.LrepConnector API to the new apply/write.Storage API"
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.BackendConnector",
      basename: "BackendConnector",
      resource: "sap/ui/fl/write/_internal/connectors/BackendConnector.js",
      module: "sap/ui/fl/write/_internal/connectors/BackendConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.72",
      description:
        "Base connector for saving and deleting data flexibility data from an back end."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.JsObjectConnector",
      basename: "JsObjectConnector",
      resource: "sap/ui/fl/write/_internal/connectors/JsObjectConnector.js",
      module: "sap/ui/fl/write/_internal/connectors/JsObjectConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description: "Connector that saves the data in an internal object.",
      experimental: {
        since: "1.70"
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.KeyUserConnector",
      basename: "KeyUserConnector",
      resource: "sap/ui/fl/write/_internal/connectors/KeyUserConnector.js",
      module: "sap/ui/fl/write/_internal/connectors/KeyUserConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "Connector for saving and deleting data from SAPUI5 Flexibility KeyUser service."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.LocalStorageConnector",
      basename: "LocalStorageConnector",
      resource: "sap/ui/fl/write/_internal/connectors/LocalStorageConnector.js",
      module: "sap/ui/fl/write/_internal/connectors/LocalStorageConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "Connector for saving data to the <code>window.localStorage</code>.",
      experimental: {
        since: "1.70"
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.LrepConnector",
      basename: "LrepConnector",
      resource: "sap/ui/fl/write/_internal/connectors/LrepConnector.js",
      module: "sap/ui/fl/write/_internal/connectors/LrepConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.67",
      description: "Connector for requesting data from an LRep-based back end."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.ObjectPathConnector",
      basename: "ObjectPathConnector",
      resource: "sap/ui/fl/write/_internal/connectors/ObjectPathConnector.js",
      module: "sap/ui/fl/write/_internal/connectors/ObjectPathConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.73",
      description: "Empty connector since we don't support writing to a file."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.ObjectStorageConnector",
      basename: "ObjectStorageConnector",
      resource:
        "sap/ui/fl/write/_internal/connectors/ObjectStorageConnector.js",
      module: "sap/ui/fl/write/_internal/connectors/ObjectStorageConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      extends: "sap.ui.fl.write.connectors.BaseConnector",
      description:
        "Base Connector for requesting data from session or local storage"
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.PersonalizationConnector",
      basename: "PersonalizationConnector",
      resource:
        "sap/ui/fl/write/_internal/connectors/PersonalizationConnector.js",
      module: "sap/ui/fl/write/_internal/connectors/PersonalizationConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "Connector for communication with SAPUI5 Flexibility Personalization Service"
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.SessionStorageConnector",
      basename: "SessionStorageConnector",
      resource:
        "sap/ui/fl/write/_internal/connectors/SessionStorageConnector.js",
      module: "sap/ui/fl/write/_internal/connectors/SessionStorageConnector",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "Connector for saving data to the <code>window.SessionStorage</code>.",
      experimental: {
        since: "1.70"
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.connectors.Utils",
      basename: "Utils",
      resource: "sap/ui/fl/write/_internal/connectors/Utils.js",
      module: "sap/ui/fl/write/_internal/connectors/Utils",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description: "Util class for Connector implementations (write)."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.Storage",
      basename: "Storage",
      resource: "sap/ui/fl/write/_internal/Storage.js",
      module: "sap/ui/fl/write/_internal/Storage",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.67",
      description:
        "Abstraction providing an API to handle communication with persistencies like back ends, local & session storage or work spaces."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.StorageFeaturesMerger",
      basename: "StorageFeaturesMerger",
      resource: "sap/ui/fl/write/_internal/StorageFeaturesMerger.js",
      module: "sap/ui/fl/write/_internal/StorageFeaturesMerger",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.70",
      description:
        "ConnectorFeaturesMerger class for Connector implementations (write)."
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write._internal.Versions",
      basename: "Versions",
      resource: "sap/ui/fl/write/_internal/Versions.js",
      module: "sap/ui/fl/write/_internal/Versions",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.74"
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write.api.AppVariantWriteAPI",
      basename: "AppVariantWriteAPI",
      resource: "sap/ui/fl/write/api/AppVariantWriteAPI.js",
      module: "sap/ui/fl/write/api/AppVariantWriteAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.72",
      description:
        "Provides an API for tools to create, update, delete app variants.",
      experimental: {
        since: "1.72"
      },
      methods: [
        {
          name: "assignCatalogs",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves with the app variant catalog assignment information"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Selector"
                },
                layer: {
                  name: "layer",
                  type: "sap.ui.fl.Layer",
                  optional: false,
                  description:
                    "Connectors are now determined based on the layer"
                },
                assignFromAppId: {
                  name: "assignFromAppId",
                  type: "string",
                  optional: false,
                  description: "Reference application ID"
                },
                action: {
                  name: "action",
                  type: "string",
                  optional: false,
                  description: "Action name e.g. assignCatalogs"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Assigns the same catalogs to app varriant as of reference application"
        },
        {
          name: "deleteAppVariant",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves with the app variant deletion response"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Selector"
                },
                layer: {
                  name: "layer",
                  type: "sap.ui.fl.Layer",
                  optional: false,
                  description:
                    "Connectors are now determined based on the layer - Smart Business must pass the layer"
                },
                transport: {
                  name: "transport",
                  type: "string",
                  optional: true,
                  description:
                    "Transport request for the app variant - Smart Business must pass the transport"
                },
                isForSAPDelivery: {
                  name: "isForSAPDelivery",
                  type: "string",
                  optional: true,
                  defaultValue: false,
                  description:
                    "Determines whether app variant deletion is intended for SAP delivery"
                },
                skipIam: {
                  name: "skipIam",
                  type: "boolean",
                  optional: true,
                  defaultValue: false,
                  description:
                    "Indicates whether the default IAM item creation and registration is skipped. This is S4/Hana specific flag passed by only Smart Business"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description: "Deletes the app variant from the backend"
        },
        {
          name: "getManifest",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description: "Promise that resolves with the app(variant) manifest"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Selector"
                },
                layer: {
                  name: "layer",
                  type: "sap.ui.fl.Layer",
                  optional: false,
                  description:
                    "Connectors are now determined based on the layer"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description: "Gets the manifest of an app(variant) from backend"
        },
        {
          name: "listAllAppVariants",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves with the list of app variant entries"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Selector"
                },
                layer: {
                  name: "layer",
                  type: "sap.ui.fl.Layer",
                  optional: false,
                  description:
                    "Connectors are now determined based on the layer"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Lists all the app variants based on the reference application"
        },
        {
          name: "saveAs",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves with the app variant save response"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Selector"
                },
                id: {
                  name: "id",
                  type: "string",
                  optional: false,
                  description: "App variant ID"
                },
                layer: {
                  name: "layer",
                  type: "sap.ui.fl.Layer",
                  optional: false,
                  description: "Current working layer"
                },
                package: {
                  name: "package",
                  type: "string",
                  optional: true,
                  description:
                    "Package info for the app variant - Smart Business must pass the package"
                },
                transport: {
                  name: "transport",
                  type: "string",
                  optional: true,
                  description:
                    "Transport request for the app variant - Smart Business must pass the transport"
                },
                version: {
                  name: "version",
                  type: "string",
                  optional: true,
                  description: "Version of the app variant"
                },
                isForSAPDelivery: {
                  name: "isForSAPDelivery",
                  type: "string",
                  optional: true,
                  defaultValue: false,
                  description:
                    "Determines whether app variant creation is intended for SAP delivery"
                },
                skipIam: {
                  name: "skipIam",
                  type: "boolean",
                  optional: true,
                  defaultValue: false,
                  description:
                    "Indicates whether the default IAM item creation and registration is skipped. This is S4/Hana specific flag passed by only Smart Business"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description: "Saves the app variant to backend."
        },
        {
          name: "unassignCatalogs",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves with the app variant unassignment information"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Selector"
                },
                layer: {
                  name: "layer",
                  type: "sap.ui.fl.Layer",
                  optional: false,
                  description:
                    "Connectors are now determined based on the layer"
                },
                action: {
                  name: "action",
                  type: "string",
                  optional: false,
                  description: "Action name e.g. unassignCatalogs"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Assigns the same catalogs to app varriant as of reference application"
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write.api.ChangesWriteAPI",
      basename: "ChangesWriteAPI",
      resource: "sap/ui/fl/write/api/ChangesWriteAPI.js",
      module: "sap/ui/fl/write/api/ChangesWriteAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.68",
      description:
        "Provides an API for tools like {@link sap.ui.rta} to create, apply and revert {@link sap.ui.fl.Change}.",
      experimental: {
        since: "1.68"
      },
      methods: [
        {
          name: "apply",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise|sap.ui.fl.Utils.FakePromise",
            description:
              "Promise that is resolved after all changes were applied in asynchronous case, or FakePromise for the synchronous processing scenario"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                change: {
                  name: "change",
                  type: "sap.ui.fl.Change",
                  optional: false,
                  description:
                    "Change object that should be applied to the passed control"
                },
                element: {
                  name: "element",
                  type: "sap.ui.core.Element",
                  optional: false,
                  description:
                    "Element instance to which the change should be applied"
                },
                modifier: {
                  name: "modifier",
                  type: "sap.ui.core.util.reflection.BaseTreeModifier",
                  optional: true,
                  description:
                    "Modifier used to apply the change; if not provided, {@link sap.ui.core.util.reflection.JsControlTreeModifier} is used"
                },
                appDescriptor: {
                  name: "appDescriptor",
                  type: "object",
                  optional: false,
                  description:
                    "App descriptor containing the metadata of the current application"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Applies a specific change on the passed control if it is not already applied."
        },
        {
          name: "create",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise|sap.ui.fl.Change",
            description:
              "In case of a descriptor change, promise resolves to the created change. In case of a flex change, the created change object is returned."
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                changeSpecificData: {
                  name: "changeSpecificData",
                  type: "object",
                  optional: false,
                  description:
                    "Property bag holding the change information, see {@link sap.ui.fl.Change#createInitialFileContent} The property <code>mPropertyBag.changeSpecificData.packageName</code> is set to <code>$TMP</code> and internally since flex changes are always local when they are created."
                },
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Managed object or selector object"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description: "Creates a change on the flex persistence."
        },
        {
          name: "revert",
          visibility: "restricted",
          static: true,
          returnValue: {
            type:
              "Promise|sap.ui.fl.Utils.FakePromise.<(sap.ui.core.Element|false)>",
            description:
              "Promise or fake promise resolving to the control on which change was reverted successfully or false when unsuccessful"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                change: {
                  name: "change",
                  type: "sap.ui.fl.Change",
                  optional: false,
                  description:
                    "Change object that should be reverted from the passed element"
                },
                element: {
                  name: "element",
                  type: "sap.ui.core.Element",
                  optional: false,
                  description:
                    "Element instance on which the change should be reverted"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Reverting a specific change on the passed control if it has already been applied or is in the process of being applied."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write.api.ControlPersonalizationWriteAPI",
      basename: "ControlPersonalizationWriteAPI",
      resource: "sap/ui/fl/write/api/ControlPersonalizationWriteAPI.js",
      module: "sap/ui/fl/write/api/ControlPersonalizationWriteAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.69",
      description: "Provides an API for controls to implement personalization.",
      experimental: {
        since: "1.69"
      },
      methods: [
        {
          name: "add",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise resolving to an array of successfully applied changes, after the changes have been written to the map of dirty changes and applied to the control"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                changes: {
                  name: "changes",
                  type:
                    "sap.ui.fl.write.api.ControlPersonalizationWriteAPI.PersonalizationChange[]",
                  optional: false,
                  description:
                    "Array of control changes of type {@link sap.ui.fl.write.api.ControlPersonalizationWriteAPI.PersonalizationChange}"
                },
                ignoreVariantManagement: {
                  name: "ignoreVariantManagement",
                  type: "boolean",
                  optional: true,
                  defaultValue: false,
                  description:
                    "If flag is set to <code>true</code>, the changes will not belong to any variant, otherwise it will be detected if the changes are done in the context of variant mangement"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Creates personalization changes, adds them to the flex persistence (not yet saved) and applies them to the control."
        },
        {
          name: "buildSelectorFromElementIdAndType",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "sap.ui.fl.ElementSelector",
            description:
              "- Object that can be used as a {@link sap.ui.fl.Selector}"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                element: {
                  name: "element",
                  type: "sap.ui.core.Element",
                  optional: false,
                  description: "Element instance to retrieve the app component"
                },
                elementId: {
                  name: "elementId",
                  type: "string",
                  optional: false,
                  description: "ID of the selector"
                },
                elementType: {
                  name: "elementType",
                  type: "string",
                  optional: false,
                  description: "Type of the selector"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Builds the {@link sap.ui.fl.Selector} for an element that is not yet available."
        },
        {
          name: "reset",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves after the deletion took place and changes are reverted"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selectors: {
                  name: "selectors",
                  type: "sap.ui.fl.Selector[]",
                  optional: false,
                  description:
                    "Array of selectors, at least one selector is necessary"
                },
                changeTypes: {
                  name: "changeTypes",
                  type: "String[]",
                  optional: true,
                  description: "Types of changes to be deleted"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Deletes changes recorded for the provided selectors. Changes to be deleted can be filtered by specification of change type(s)."
        },
        {
          name: "save",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that is resolved when the changes have been saved"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Selector"
                },
                changes: {
                  name: "changes",
                  type: "String[]",
                  optional: true,
                  description:
                    "Array of changes to be saved; if not provided, all unsaved changes will be saved"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description: "Saves unsaved changes to the backend service."
        }
      ]
    },
    {
      kind: "typedef",
      name:
        "sap.ui.fl.write.api.ControlPersonalizationWriteAPI.PersonalizationChange",
      basename: "PersonalizationChange",
      resource: "sap/ui/fl/write/api/ControlPersonalizationWriteAPI.js",
      module: "sap/ui/fl/write/api/ControlPersonalizationWriteAPI",
      static: true,
      visibility: "restricted",
      since: "1.69",
      description:
        "Object containing attributes of a change, along with the control to which this change should be applied.",
      properties: [
        {
          name: "selectorElement",
          type: "sap.ui.core.Element",
          visibility: "restricted",
          description:
            "Control object to be used as the selector for the change"
        },
        {
          name: "changeSpecificData",
          type: "object",
          visibility: "restricted",
          description: "Map of change-specific data to perform a flex change"
        },
        {
          name: "changeSpecificData.changeType",
          type: "string",
          visibility: "restricted",
          description: "Change type for which a change handler is registered"
        },
        {
          name: "changeSpecificData.content",
          type: "object",
          visibility: "restricted",
          description:
            "Content for the change, see {@link sap.ui.fl.Change#createInitialFileContent}"
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write.api.FeaturesAPI",
      basename: "FeaturesAPI",
      resource: "sap/ui/fl/write/api/FeaturesAPI.js",
      module: "sap/ui/fl/write/api/FeaturesAPI",
      export: "",
      static: true,
      visibility: "public",
      since: "1.70",
      description:
        "Provides an API to determine which features are available for flexibility.",
      experimental: {
        since: "1.70"
      },
      methods: [
        {
          name: "isKeyUser",
          visibility: "public",
          static: true,
          returnValue: {
            type: "Promise.<boolean>",
            description:
              "Resolves to a boolean indicating if key user is available"
          },
          description:
            "Checks if key user rights are available for the current user. Application developers can use this API to decide if the key user adaptation feature should be visible to the current user. This only applies if key user adaptation should be handled standalone without an SAP Fiori launchpad."
        },
        {
          name: "isPublishAvailable",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise.<boolean>",
            description:
              "Promise resolving with a flag if publishing is available"
          },
          description:
            "Determines if the current runtime can publish flexibility content in the connected backend."
        },
        {
          name: "isVersioningEnabled",
          visibility: "public",
          static: true,
          returnValue: {
            type: "Promise.<boolean>",
            description:
              "Resolves to a boolean indicating if versioning is enabled"
          },
          parameters: [
            {
              name: "sLayer",
              type: "string",
              optional: false,
              description: "Layer to check for the draft versioning"
            }
          ],
          description:
            "Checks if the data storing implementation for a given layer is capable of handling versioning."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write.api.PersistenceWriteAPI",
      basename: "PersistenceWriteAPI",
      resource: "sap/ui/fl/write/api/PersistenceWriteAPI.js",
      module: "sap/ui/fl/write/api/PersistenceWriteAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.68",
      description:
        "Provides an API for tools to query, provide, save or reset {@link sap.ui.fl.Change}s.",
      experimental: {
        since: "1.68"
      },
      methods: [
        {
          name: "add",
          visibility: "restricted",
          static: true,
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                change: {
                  name: "change",
                  type: "sap.ui.fl.Change",
                  optional: false,
                  description: "Change instance"
                },
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "To retrieve the associated flex persistence"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Adds a change to the flex persistence. If it's a descriptor change, a transport request is set."
        },
        {
          name: "getResetAndPublishInfo",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise.<object>",
            description:
              "Resolves the information if the application to which the selector belongs has content that can be published/reset"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Selector"
                },
                layer: {
                  name: "layer",
                  type: "string",
                  optional: false,
                  description:
                    "Layer on which the request is sent to the backend"
                }
              },
              description:
                "Contains additional data needed for checking flex/info"
            }
          ],
          description:
            "Provides information if content from backend and persistence in an application can be published/reset."
        },
        {
          name: "hasHigherLayerChanges",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise.<boolean>",
            description:
              "Promise that resolves to a boolean, indicating if a personalization change that was created during runtime is active in the application"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Retrieves the associated flex persistence"
                },
                upToLayer: {
                  name: "upToLayer",
                  type: "string",
                  optional: true,
                  description: "Layer to compare with"
                },
                ignoreMaxLayerParameter: {
                  name: "ignoreMaxLayerParameter",
                  type: "boolean",
                  optional: true,
                  description:
                    "Indicates that personalization is to be checked without max layer filtering"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Determines if user-specific changes or variants are present in the flex persistence."
        },
        {
          name: "remove",
          visibility: "restricted",
          static: true,
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                change: {
                  name: "change",
                  type: "sap.ui.fl.Change",
                  optional: false,
                  description: "Change to be removed"
                },
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "To retrieve the associated flex persistence"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Removes a change from from the applied changes on a control and from the flex persistence map."
        },
        {
          name: "reset",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description: "Promise that resolves after the deletion took place"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Retrieves the associated flex persistence"
                },
                layer: {
                  name: "layer",
                  type: "string",
                  optional: true,
                  description: "Layer for which changes are to be deleted"
                },
                generator: {
                  name: "generator",
                  type: "string",
                  optional: true,
                  description: "Generator of changes"
                },
                selectorIds: {
                  name: "selectorIds",
                  type: "string[]",
                  optional: true,
                  description: "Selector IDs in local format"
                },
                changeTypes: {
                  name: "changeTypes",
                  type: "string[]",
                  optional: true,
                  description: "Types of changes"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Reset changes in the backend; If the reset is performed for an entire component, a browser reload is required; If the reset is performed for a control, this function also triggers a reversion of deleted UI changes."
        },
        {
          name: "save",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise that resolves with an array of responses or is rejected with the first error"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "Retrieves the associated flex persistence"
                },
                skipUpdateCache: {
                  name: "skipUpdateCache",
                  type: "boolean",
                  optional: true,
                  description: "Indicates if cache update should be skipped"
                },
                transport: {
                  name: "transport",
                  type: "string",
                  optional: true,
                  description:
                    "Transport request for the app variant - Smart Business must pass the transport in onPremise system"
                },
                layer: {
                  name: "layer",
                  type: "string",
                  optional: true,
                  defaultValue: "CUSTOMER",
                  description:
                    "Proposed layer (might be overwritten by the backend) when creating a new app variant - Smart Business must pass the layer"
                },
                isForSAPDelivery: {
                  name: "isForSAPDelivery",
                  type: "string",
                  optional: true,
                  defaultValue: false,
                  description:
                    "Determines whether app variant updation is intended for SAP delivery"
                },
                skipIam: {
                  name: "skipIam",
                  type: "boolean",
                  optional: true,
                  defaultValue: false,
                  description:
                    "Indicates whether the default IAM item creation and registration is skipped. This is S4/Hana specific flag passed by Smart Business"
                },
                draft: {
                  name: "draft",
                  type: "boolean",
                  optional: true,
                  defaultValue: false,
                  description:
                    "Indicates if changes should be written as a draft"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Saves all flex changes, app variants and descriptor changes on the relevant flex persistence."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write.api.SmartVariantManagementWriteAPI",
      basename: "SmartVariantManagementWriteAPI",
      resource: "sap/ui/fl/write/api/SmartVariantManagementWriteAPI.js",
      module: "sap/ui/fl/write/api/SmartVariantManagementWriteAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.69.0",
      description:
        "Provides an API to handle specific functionalities for {@link sap.ui.comp.smartvariants.SmartVariantManagement}.",
      experimental: {},
      methods: [
        {
          name: "add",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "string",
            description: "ID of the newly created change"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.comp.smartvariants.SmartVariantManagement",
                  optional: false,
                  description: "SAPUI5 Smart Variant Management control"
                },
                changeSpecificData: {
                  name: "changeSpecificData",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    type: {
                      name: "type",
                      type: "string",
                      optional: false,
                      description:
                        "Type (<code>filterVariant</code>, <code>tableVariant</code>, etc.)"
                    },
                    ODataService: {
                      name: "ODataService",
                      type: "string",
                      optional: false,
                      description: "Name of the OData service --> can be null"
                    },
                    texts: {
                      name: "texts",
                      type: "object",
                      optional: false,
                      description:
                        "Map object with all referenced texts within the file; these texts will be connected to the translation process"
                    },
                    content: {
                      name: "content",
                      type: "object",
                      optional: false,
                      description: "Content of the new change"
                    },
                    isVariant: {
                      name: "isVariant",
                      type: "boolean",
                      optional: false,
                      description: "Indicates if the change is a variant"
                    },
                    packageName: {
                      name: "packageName",
                      type: "string",
                      optional: true,
                      description:
                        "Package name for the new entity; default is <code>$tmp</code>"
                    },
                    isUserDependent: {
                      name: "isUserDependent",
                      type: "boolean",
                      optional: false,
                      description:
                        "Indicates if a change is only valid for the current user"
                    },
                    id: {
                      name: "id",
                      type: "boolean",
                      optional: true,
                      description:
                        "ID of the change; the ID has to be globally unique and should only be set in exceptional cases for example downport of variants"
                    }
                  },
                  description: "Map of parameters, see below"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Adds a new change (could also be a variant) and returns the ID of the new change."
        },
        {
          name: "save",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise.<object[]>",
            description:
              "Promise that resolves with an array of responses or is rejected with the first error"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.comp.smartvariants.SmartVariantManagement",
                  optional: false,
                  description: "SAPUI5 Smart Variant Management control"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description: "Saves/flushes all current changes to the back end."
        },
        {
          name: "setDefaultVariantId",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "object",
            description: "Default variant change"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.comp.smartvariants.SmartVariantManagement",
                  optional: false,
                  description: "SAPUI5 Smart Variant Management control"
                },
                defaultVariantId: {
                  name: "defaultVariantId",
                  type: "string",
                  optional: false,
                  description: "ID of the new default variant"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Sets the default variant for the current control synchronously. A new change object is created or an existing change is updated. This change object is kept in memory and can be flushed using save. WARNING: The consumer has to make sure that the changes have already been retrieved with <code>getChanges</code>."
        },
        {
          name: "setExecuteOnSelect",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "object",
            description: "Default variant change"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                control: {
                  name: "control",
                  type: "sap.ui.comp.smartvariants.SmartVariantManagement",
                  optional: false,
                  description: "SAPUI5 Smart Variant Management control"
                },
                executeOnSelect: {
                  name: "executeOnSelect",
                  type: "boolean",
                  optional: false,
                  description:
                    "New <code>ExecuteOnSelect</code> flag for standard variant"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Retrieves the <code>ExecuteOnSelect</code> for the standard variant for the current control synchronously. WARNING: Tthe consumer has to make sure that the changes have already been retrieved with <code>getChanges</code>."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write.api.UI2PersonalizationWriteAPI",
      basename: "UI2PersonalizationWriteAPI",
      resource: "sap/ui/fl/write/api/UI2PersonalizationWriteAPI.js",
      module: "sap/ui/fl/write/api/UI2PersonalizationWriteAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.71",
      description: "Provides an API to write UI2 personalization.",
      experimental: {
        since: "1.71"
      },
      methods: [
        {
          name: "create",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise resolving with the object stored under the passed container key and item name, or undefined in case no entry was stored for these"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "To retrieve the associated flex persistence"
                },
                containerKey: {
                  name: "containerKey",
                  type: "string",
                  optional: false,
                  description:
                    "The key of the container in which the personalization should stored"
                },
                itemName: {
                  name: "itemName",
                  type: "string",
                  optional: false,
                  description:
                    "The name under which the personalization should be stored"
                },
                content: {
                  name: "content",
                  type: "string",
                  optional: false,
                  description: "The personalization content to be stored"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description:
            "Stores a personalization object for an application under a given container key and item name pair."
        },
        {
          name: "deletePersonalization",
          visibility: "restricted",
          static: true,
          returnValue: {
            type: "Promise",
            description:
              "Promise resolving in case the deletion request was successful"
          },
          parameters: [
            {
              name: "mPropertyBag",
              type: "object",
              optional: false,
              parameterProperties: {
                selector: {
                  name: "selector",
                  type: "sap.ui.fl.Selector",
                  optional: false,
                  description: "To retrieve the associated flex persistence"
                },
                reference: {
                  name: "reference",
                  type: "string",
                  optional: false,
                  description:
                    "The reference of the application for which the personalization should be deleted"
                },
                containerKey: {
                  name: "containerKey",
                  type: "string",
                  optional: false,
                  description:
                    "The key of the container for which the personalization should be deleted"
                },
                itemName: {
                  name: "itemName",
                  type: "string",
                  optional: false,
                  description:
                    "The name under which the personalization should be deleted"
                }
              },
              description: "Object with parameters as properties"
            }
          ],
          description: "Deletes the personalization for a given reference."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write.api.VersionsAPI",
      basename: "VersionsAPI",
      resource: "sap/ui/fl/write/api/VersionsAPI.js",
      module: "sap/ui/fl/write/api/VersionsAPI",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.74",
      description:
        "Provides an API for tools like {@link sap.ui.rta} to activate, discard and retrieve versions.",
      experimental: {
        since: "1.74"
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.fl.write.connectors.BaseConnector",
      basename: "BaseConnector",
      resource: "sap/ui/fl/write/connectors/BaseConnector.js",
      module: "sap/ui/fl/write/connectors/BaseConnector",
      export: "",
      static: true,
      visibility: "public",
      since: "1.67",
      description: "Base class for connectors.",
      experimental: {
        since: "1.67"
      }
    }
  ]
};