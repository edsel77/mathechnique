import Vue from 'vue'

Vue.prototype.$build_version = '1_0_5'

// const main_path = 'https://my.safepayhost.com/'
const main_path = 'https://devnyc001.acebill.net/'

Vue.prototype.$icon_path = main_path + 'api'
Vue.prototype.$server = `${main_path}api/api.php?`
Vue.prototype.$server_iot = `${main_path}api/IOTapi.php?`

Vue.prototype.$storage_server = 'http://devnyc001.acebill.net/images/'

Vue.prototype.$cover_photo = '/images/cover.png'

Vue.prototype.$date_format = 'MM/dd/yyyy'

Vue.prototype.$message_interval = 60 //seconds

Vue.prototype.$attribute_types = [
  'Slider',
  'Button',
  'Dial'
]

Vue.prototype.$pathPages = [
  {
    page: 'Home',
    path: '/',
    isDevicePage: false
  },
  {
    page: 'Groups',
    path: '/groups',
    isDevicePage: false
  },
  {
    page: 'Add Group',
    path: '/add-groups',
    isDevicePage: false
  },
  {
    page: 'Attributes',
    path: '/attributes',
    isDevicePage: false
  },
  {
    page: 'Add Attribute',
    path: '/add-attribute',
    isDevicePage: false
  },
  {
    page: 'Device Matrix',
    path: '/devices/device-matrix',
    isDevicePage: false
  },
  {
    page: 'Dashboard',
    path: '/devices/device-dashboard',
    isDevicePage: true
  },
  {
    page: 'Settings',
    path: '/devices/settings',
    isDevicePage: true
  },
  {
    page: 'Room',
    path: '/room',
    isDevicePage: true
  },
  {
    page: 'Room Management',
    path: '/devices/settings/room',
    isDevicePage: true
  },
  {
    page: 'Scene Management',
    path: '/devices/settings/scene',
    isDevicePage: true
  },
  {
    page: 'Device Preset',
    path: '/devices/preset',
    isDevicePage: true
  },
  {
    page: 'Address Book',
    path: '/address-book',
    isDevicePage: false
  },
  {
    page: 'Messages',
    path: '/messages',
    isDevicePage: false
  },
  {
    page: 'New Message',
    path: '/new-message',
    isDevicePage: false
  },
  {
    page: 'Schedule Scenes',
    path: '/schedule/scenes',
    isDevicePage: true
  }
]

Vue.prototype.$status_list = [
	'All',
	'NEW',
	'PENDING',
	'CLOSED'
]

Vue.prototype.$categories = [
	'All',
	'Billing',
	'Cancellation',
	'Customer',
	'HOA Account Hold',
	'Install',
	'Internal',
	'Network',
	'Other',
	'Provider',
	'Sales',
	'Service',
	'VoIP',
	'Website'
]

Vue.prototype.$priority_list = [
	'All',
	'5',
	'4',
	'3',
	'2',
	'1'
]

Vue.prototype.$invoice_status = [
	'All',
	'Paid',
	'Unpaid'
]

Vue.prototype.$payment_methods = [
	{
		name: 'Authorized.net',
		value: 'Authorizedotnet',
	},
	{
		name: 'Stripe',
		value: 'Stripe',
	},
	{
		name: 'Cash',
		value: 'Cash',
	},
	{
		name: 'Check',
		value: 'Check',
	},
	{
		name: 'Wire Transfer',
		value: 'Wire',
	}
]

Vue.prototype.$payment_method_display = ['Authorized.net', 'Stripe', 'Cash', 'Check', 'Wire Transfer']

Vue.prototype.$card_type = [
	'VISA',
	'Mastercard',
	'American Express',
	'Discover'
]

Vue.prototype.$date_format = 'MM/DD/YYYY'
Vue.prototype.$datetime_format = 'MM/DD/YYYY hh:mm A'

Vue.prototype.$notify_reload_time = 5000

Vue.prototype.$reload_time_out = 8000

Vue.prototype.$billing_cycle = [
	'one of day',
	'week',
	'month',
	'year'
]

// Vue.prototype.$street_directions = [
// 	{ name: 'North', 			value: 'N' },
// 	{ name: 'North-east',	value: 'NE' },
// 	{ name: 'East', 			value: 'E' },
// 	{ name: 'South-east', value: 'SE' },
// 	{ name: 'South', 			value: 'S' },
// 	{ name: 'South-west', value: 'SW' },
// 	{ name: 'West', 			value: 'W' },
// 	{ name: 'North-west', value: 'NW' }
// ]

Vue.prototype.$street_directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

Vue.prototype.$new_date = new Date();

Vue.prototype.item_types = [
  {
    ID: '1203',
    Type: 'Switch'
  },
  {
    ID: '1209',
    Type: 'Motion Sensor'
  },
  {
    ID: '1210',
    Type: 'Leak Detector'
  },
  {
    ID: '1211',
    Type: 'Thermostat'
  },
  {
    ID: '1212',
    Type: 'Wall Switch'
  },
  {
    ID: '1213',
    Type: 'ColorLamp'
  },
  {
    ID: '1218',
    Type: 'Outlet'
  },
  {
    ID: '1242',
    Type: 'Shade Control'
  },
  {
    ID: '1246',
    Type: 'Shade'
  }
]