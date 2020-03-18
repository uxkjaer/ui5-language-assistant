import { XMLAttribute, XMLElement } from "@xml-tools/ast";
import {
  UI5Event,
  UI5Prop,
  UI5Association
} from "@ui5-editor-tools/semantic-model-types";
import {
  flattenEvents,
  flattenProperties,
  flattenAssociations,
  isElementSubClass
} from "@ui5-editor-tools/logic-utils";
import { compact, map, uniq } from "lodash";
import { UI5AttributeNameCompletionOptions } from "./index";
import { XMLViewCompletion } from "../../../api";
import {
  filterMembersForSuggestion,
  getClassByElement
} from "../utils/filter-members";

/**
 * Suggests Properties and Events inside Element
 * For example: 'backgroundDesign' and 'icon' in `sap.m.Page` element
 */
export function propEventAssocSuggestions(
  opts: UI5AttributeNameCompletionOptions
): XMLViewCompletion[] {
  const ui5Model = opts.context;
  const xmlElement = opts.element;

  const elementClass = getClassByElement(xmlElement, ui5Model);
  if (!isElementSubClass(elementClass)) {
    return [];
  }
  const allProps: (UI5Prop | UI5Event | UI5Association)[] = flattenProperties(
    elementClass
  );
  const allEvents = flattenEvents(elementClass);
  const allAssociations = flattenAssociations(elementClass);
  const allPropertiesEventsAssociations = allProps
    .concat(allEvents)
    .concat(allAssociations);

  const prefix = opts.prefix ?? "";
  const existingAttributeNames = compact(
    uniq(map(xmlElement.attributes, _ => _.key))
  );

  const uniquePrefixMatchingAttributes = filterMembersForSuggestion(
    allPropertiesEventsAssociations,
    prefix,
    existingAttributeNames
  );

  return map(uniquePrefixMatchingAttributes, _ => ({
    ui5Node: _,
    astNode:
      (opts.attribute as XMLAttribute) ?? createDummyAttribute(xmlElement)
  }));
}

/**
 * When no prefix exists there would be no corresponding XMLAttribute in the XML AST.
 * By creating a "dummy" attribute we remain consistent with the expected API of `XMLViewCompletion`.
 */
function createDummyAttribute(parent: XMLElement): XMLAttribute {
  return {
    type: "XMLAttribute",
    key: null,
    // Note the "dummy" XMLAttribute has a parent, however the parent does **not** reference the attribute.
    parent: parent,
    position: {
      startOffset: -1,
      endOffset: -1,
      startLine: -1,
      endLine: -1,
      startColumn: -1,
      endColumn: -1
    },
    syntax: {},
    value: null
  };
}