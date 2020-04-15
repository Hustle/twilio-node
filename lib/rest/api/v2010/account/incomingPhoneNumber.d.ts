/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { AssignedAddOnList } from './incomingPhoneNumber/assignedAddOn';
import { AssignedAddOnListInstance } from './incomingPhoneNumber/assignedAddOn';
import { LocalListInstance } from './incomingPhoneNumber/local';
import { MobileListInstance } from './incomingPhoneNumber/mobile';
import { PhoneNumberCapabilities } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';
import { TollFreeListInstance } from './incomingPhoneNumber/tollFree';

type IncomingPhoneNumberAddressRequirement = 'none'|'any'|'local'|'foreign';

type IncomingPhoneNumberEmergencyStatus = 'Active'|'Inactive';

type IncomingPhoneNumberVoiceReceiveMode = 'voice'|'fax';

/**
 * Initialize the IncomingPhoneNumberList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 */
declare function IncomingPhoneNumberList(version: V2010, accountSid: string): IncomingPhoneNumberListInstance;

/**
 * Options to pass to update
 *
 * @property accountSid - The SID of the Account that created the resource to update
 * @property addressSid - The SID of the Address resource associated with the phone number
 * @property apiVersion - The API version to use for incoming calls made to the phone number
 * @property bundleSid - The SID of the Bundle resource associated with number
 * @property emergencyAddressSid - The emergency address configuration to use for emergency calling
 * @property emergencyStatus - Whether the phone number is enabled for emergency calling
 * @property friendlyName - A string to describe the resource
 * @property identitySid - Unique string that identifies the identity associated with number
 * @property smsApplicationSid - Unique string that identifies the application
 * @property smsFallbackMethod - HTTP method used with sms_fallback_url
 * @property smsFallbackUrl - The URL we call when an error occurs while executing TwiML
 * @property smsMethod - The HTTP method to use with sms_url
 * @property smsUrl - The URL we should call when the phone number receives an incoming SMS message
 * @property statusCallback - The URL we should call to send status information to your application
 * @property statusCallbackMethod - The HTTP method we should use to call status_callback
 * @property trunkSid - SID of the trunk to handle phone calls to the phone number
 * @property voiceApplicationSid - The SID of the application to handle the phone number
 * @property voiceCallerIdLookup - Whether to lookup the caller's name
 * @property voiceFallbackMethod - The HTTP method used with fallback_url
 * @property voiceFallbackUrl - The URL we will call when an error occurs in TwiML
 * @property voiceMethod - The HTTP method used with the voice_url
 * @property voiceReceiveMode - Incoming call type: fax or voice
 * @property voiceUrl - The URL we should call when the phone number receives a call
 */
interface IncomingPhoneNumberInstanceUpdateOptions {
  accountSid?: string;
  addressSid?: string;
  apiVersion?: string;
  bundleSid?: string;
  emergencyAddressSid?: string;
  emergencyStatus?: IncomingPhoneNumberEmergencyStatus;
  friendlyName?: string;
  identitySid?: string;
  smsApplicationSid?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  trunkSid?: string;
  voiceApplicationSid?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceReceiveMode?: IncomingPhoneNumberVoiceReceiveMode;
  voiceUrl?: string;
}

interface IncomingPhoneNumberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): IncomingPhoneNumberContext;
  /**
   * create a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
  /**
   * create a IncomingPhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: IncomingPhoneNumberListInstanceCreateOptions, callback?: (error: Error | null, item: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
  /**
   * Streams IncomingPhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: IncomingPhoneNumberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams IncomingPhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: IncomingPhoneNumberListInstanceEachOptions, callback?: (item: IncomingPhoneNumberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a incoming_phone_number
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): IncomingPhoneNumberContext;
  /**
   * Retrieve a single target page of IncomingPhoneNumberInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
  /**
   * Retrieve a single target page of IncomingPhoneNumberInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
  /**
   * Lists IncomingPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: IncomingPhoneNumberInstance[]) => any): Promise<IncomingPhoneNumberInstance[]>;
  /**
   * Lists IncomingPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: IncomingPhoneNumberListInstanceOptions, callback?: (error: Error | null, items: IncomingPhoneNumberInstance[]) => any): Promise<IncomingPhoneNumberInstance[]>;
  local?: LocalListInstance;
  mobile?: MobileListInstance;
  /**
   * Retrieve a single page of IncomingPhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
  /**
   * Retrieve a single page of IncomingPhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: IncomingPhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  tollFree?: TollFreeListInstance;
}

/**
 * Options to pass to create
 *
 * @property addressSid - The SID of the Address resource associated with the phone number
 * @property apiVersion - The API version to use for incoming calls made to the new phone number
 * @property areaCode - The desired area code for the new phone number
 * @property bundleSid - The SID of the Bundle resource associated with number
 * @property emergencyAddressSid - The emergency address configuration to use for emergency calling
 * @property emergencyStatus - Status determining whether the new phone number is enabled for emergency calling
 * @property friendlyName - A string to describe the new phone number
 * @property identitySid - The SID of the Identity resource to associate with the new phone number
 * @property phoneNumber - The phone number to purchase in E.164 format
 * @property smsApplicationSid - The SID of the application to handle SMS messages
 * @property smsFallbackMethod - HTTP method used with sms_fallback_url
 * @property smsFallbackUrl - The URL we call when an error occurs while executing TwiML
 * @property smsMethod - The HTTP method to use with sms url
 * @property smsUrl - The URL we should call when the new phone number receives an incoming SMS message
 * @property statusCallback - The URL we should call to send status information to your application
 * @property statusCallbackMethod - HTTP method we should use to call status_callback
 * @property trunkSid - SID of the trunk to handle calls to the new phone number
 * @property voiceApplicationSid - The SID of the application to handle the new phone number
 * @property voiceCallerIdLookup - Whether to lookup the caller's name
 * @property voiceFallbackMethod - The HTTP method used with voice_fallback_url
 * @property voiceFallbackUrl - The URL we will call when an error occurs in TwiML
 * @property voiceMethod - The HTTP method used with the voice_url
 * @property voiceReceiveMode - Incoming call type: fax or voice
 * @property voiceUrl - The URL we should call when the phone number receives a call
 */
interface IncomingPhoneNumberListInstanceCreateOptions {
  addressSid?: string;
  apiVersion?: string;
  areaCode?: string;
  bundleSid?: string;
  emergencyAddressSid?: string;
  emergencyStatus?: IncomingPhoneNumberEmergencyStatus;
  friendlyName?: string;
  identitySid?: string;
  phoneNumber?: string;
  smsApplicationSid?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  trunkSid?: string;
  voiceApplicationSid?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceReceiveMode?: IncomingPhoneNumberVoiceReceiveMode;
  voiceUrl?: string;
}

/**
 * Options to pass to each
 *
 * @property beta - Whether to include new phone numbers
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - A string that identifies the IncomingPhoneNumber resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property origin - Include phone numbers based on their origin. By default, phone numbers of all origin are included.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property phoneNumber - The phone numbers of the IncomingPhoneNumber resources to read
 */
interface IncomingPhoneNumberListInstanceEachOptions {
  beta?: boolean;
  callback?: (item: IncomingPhoneNumberInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  origin?: string;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to list
 *
 * @property beta - Whether to include new phone numbers
 * @property friendlyName - A string that identifies the IncomingPhoneNumber resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property origin - Include phone numbers based on their origin. By default, phone numbers of all origin are included.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property phoneNumber - The phone numbers of the IncomingPhoneNumber resources to read
 */
interface IncomingPhoneNumberListInstanceOptions {
  beta?: boolean;
  friendlyName?: string;
  limit?: number;
  origin?: string;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to page
 *
 * @property beta - Whether to include new phone numbers
 * @property friendlyName - A string that identifies the IncomingPhoneNumber resources to read
 * @property origin - Include phone numbers based on their origin. By default, phone numbers of all origin are included.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property phoneNumber - The phone numbers of the IncomingPhoneNumber resources to read
 */
interface IncomingPhoneNumberListInstancePageOptions {
  beta?: boolean;
  friendlyName?: string;
  origin?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  phoneNumber?: string;
}

interface IncomingPhoneNumberPayload extends IncomingPhoneNumberResource, Page.TwilioResponsePayload {
}

interface IncomingPhoneNumberResource {
  account_sid: string;
  address_requirements: IncomingPhoneNumberAddressRequirement;
  address_sid: string;
  api_version: string;
  beta: boolean;
  bundle_sid: string;
  capabilities: PhoneNumberCapabilities;
  date_created: Date;
  date_updated: Date;
  emergency_address_sid: string;
  emergency_status: IncomingPhoneNumberEmergencyStatus;
  friendly_name: string;
  identity_sid: string;
  origin: string;
  phone_number: string;
  sid: string;
  sms_application_sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  trunk_sid: string;
  uri: string;
  voice_application_sid: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface IncomingPhoneNumberSolution {
  accountSid?: string;
}


declare class IncomingPhoneNumberContext {
  /**
   * Initialize the IncomingPhoneNumberContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource to fetch
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, accountSid: string, sid: string);

  assignedAddOns: AssignedAddOnListInstance;
  /**
   * fetch a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
  /**
   * remove a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
  /**
   * update a IncomingPhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: IncomingPhoneNumberInstanceUpdateOptions, callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
}


declare class IncomingPhoneNumberInstance extends SerializableClass {
  /**
   * Initialize the IncomingPhoneNumberContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, payload: IncomingPhoneNumberPayload, accountSid: string, sid: string);

  private _proxy: IncomingPhoneNumberContext;
  accountSid: string;
  addressRequirements: IncomingPhoneNumberAddressRequirement;
  addressSid: string;
  apiVersion: string;
  /**
   * Access the assignedAddOns
   */
  assignedAddOns(): AssignedAddOnListInstance;
  beta: boolean;
  bundleSid: string;
  capabilities: PhoneNumberCapabilities;
  dateCreated: Date;
  dateUpdated: Date;
  emergencyAddressSid: string;
  emergencyStatus: IncomingPhoneNumberEmergencyStatus;
  /**
   * fetch a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
  friendlyName: string;
  identitySid: string;
  origin: string;
  phoneNumber: string;
  /**
   * remove a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<boolean>;
  sid: string;
  smsApplicationSid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsUrl: string;
  statusCallback: string;
  statusCallbackMethod: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  trunkSid: string;
  /**
   * update a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
  /**
   * update a IncomingPhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: IncomingPhoneNumberInstanceUpdateOptions, callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
  uri: string;
  voiceApplicationSid: string;
  voiceCallerIdLookup: boolean;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceUrl: string;
}


declare class IncomingPhoneNumberPage extends Page<V2010, IncomingPhoneNumberPayload, IncomingPhoneNumberResource, IncomingPhoneNumberInstance> {
  /**
   * Initialize the IncomingPhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: IncomingPhoneNumberSolution);

  /**
   * Build an instance of IncomingPhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IncomingPhoneNumberPayload): IncomingPhoneNumberInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { IncomingPhoneNumberAddressRequirement, IncomingPhoneNumberContext, IncomingPhoneNumberEmergencyStatus, IncomingPhoneNumberInstance, IncomingPhoneNumberInstanceUpdateOptions, IncomingPhoneNumberList, IncomingPhoneNumberListInstance, IncomingPhoneNumberListInstanceCreateOptions, IncomingPhoneNumberListInstanceEachOptions, IncomingPhoneNumberListInstanceOptions, IncomingPhoneNumberListInstancePageOptions, IncomingPhoneNumberPage, IncomingPhoneNumberPayload, IncomingPhoneNumberResource, IncomingPhoneNumberSolution, IncomingPhoneNumberVoiceReceiveMode }
