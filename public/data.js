var questions = [{
    question: "With which three kinds of product relations do Magento Catalog Target Rules deal?(Choose three) ",
    choices: ["The relations between a configurable product and its child products.", "The relations between a bundle and its child products", "The relations among products linked as cross-sell products", "The relations between a product and its custom options","The relations among products linked as related products","The relations among products linked as upsell products"],
    correctAnswer: ["2","4","5"]
}, {
    question: "When setData('some','value') is called on an EAV entity and the entity is saved to the database, ",
    choices: ["The 'value' of the attribute named 'some' is saved in the eav_values table", "The 'value' of the attribute named 'some' is saved in one of the entity's tables depending on its datatype (for example, entityname_varchar)", "The data will be stored in the EAV registry making 'some' 'value' available to the entity", "The 'value' of the attribute named T some' is saved in the eav attribute values table"],
    correctAnswer: 1
}, {
    question: "A custom frontend controller will extend which of the following classes? ",
    choices: ["Mage_Core_Controller_Front_Action", "Mage_Adminhtml_Controller_Action", "Mage_Core_Controller_Varien_Front", "Mage_Core_Controller_Abstract"],
    correctAnswer: 0
}, {
    question: "Which one of the following xpaths is correct for replacing Mage_Customer_Model_Custom_Address via Mage::helper ('customer/address')? answer c",
    choices: ["Global/customer/helpers/address", "Global/rewrite/helpers/rewrite/address", "Global/helpers/customers/rewrite/address", "Global/helpers/rewrite/customer_address","Global/helpers/rewrite/customer/address"],
    correctAnswer: 2
}, {
    question: "Which three of the following object types will have a parent class found in the Mage_Eav module for the purposes of EAV data storage in Magento? (Choose three) answer ",
    choices: ["Data model", "Data helper", "Resource model", "Resource collection","Setup class"],
    correctAnswer: ["2","3","4"]
}, {
    question: "Which three of the following conditions are used to protect an admin route via ACL? (Choose three) ",
    choices: ["You have defined an ACL in your module configuration", "At least on admin role must have permisson for that route", "You have extended the controller from Mage_Adminhtml_Controller_Action", "You have define a method _isAllowed which check permission","The route name must start with admin"],
    correctAnswer: ["0","2","3"]
}, {
    question: "Applying the shopping cart rule's action affects the quote item by setting the quote item's ____________.  ",
    choices: ["base_price and price properties with the discounted price", "base_discount_amount and discount_amount with the discount applied to the original price", "base_row_total and cow_total properties with the discounted price", "base_price_incl_tax and price_incl_tax properties with the discounted price"],
    correctAnswer: ["1"]
}, {
    question: "What is the purpose of Catalog Target rules? ",
    choices:["To extend Catalog Price Rules to be used for related products", "To provide a mechanism for rendering a list of additional products on the product page", "To provide a mechaism for rendering a list of custom product options", "To provide a mechaism for easier selection options for configurable products"],
    correctAnswer:["1"]
}, {
    question:"When changes are made to more than one of a collection's items using setData('some','value'), which of the following methods will save the changes in the collection? ",
    choices:["$collection->saveAll();", "$collection->saveItems();", "$collection->saveAllItems();","$collection->save();"],
    correctAnswer:["3"]
}, {
    question: "When $this->load Layout ('foo_bar_baz') is called in a standard front action, what is the effect on the layout update object instance? ",
    choices: ["foo_bar_baz will be the only handle added", "loadLayout() does not take any arguments, so there is no effect", "Only two handles will be added: foo_bar_baz and default", "Foo_bar_baz will be added instead of the default handle"],
    correctAnswer: ["3"]
}, {
    question: "Whic of the following block methods is the best to override when there is a need to customize how the block's html is rendered? ",
    choices: ["_toHtml()", "toHtml()", "setLayout()", "renderLayout()"],
    correctAnswer: ["0"]
}, {
    question:"Which kind of class is responsible for calculating te actual amount of reward points in every case? ",
    choices: ["Reward model (Enterprise_Model_Reward)","Action model (derivatives from Enterprise_Reward_Model_Action)", "Event model (derivatives from Enterprise_Model_Event)", "Calculation model (Enterprise_Reward_Model_Calculator)"],
    correctAnswer: ["1"]

}, {
    question: "In what order are the routers from the Magento core checked for a matching route?\n Default:Mage_Core_Controller_Varien_Route_Default\n CMS: Mage_Core_Controller_Router\n Standard: Mage_Core_Controller_Varien_Router_Standard\n Admin: Mage_Core_Controller_Varien_Router_Admin",
    choices: ["Admin, Standard, CMS, Default", "Default, CMS, Standard, Admin", "Admin, CMS, Standard, Default", "Standard, Admin, Default, CMS"],
    correctAnswer: ["0"]
}, {
    question: "What type of Magento class is an API resource? ",
    choices: ["Controller", "Helper", "Model", "Resource model"],
    correctAnswer: ["2"]
}, {
    question: "To implement a standard Adminhtml form for a custom data model, which of the following must you do? (Choose two) ",
    choices: ["Declare your module's block class prefix in the config.xml file", "Implement a sub-class of Mage_Adminhtml_Block_Widget_Form", "Implement a sub-class of Mage_Adminhtml_Block_Form_Abstract", "Create a sub-class of Mage_Admin_Block_Form_Element_Abstract for each form field to be presented", "Add a set of configuration values in the module's config-xml defining the form fields to be displayed"],
    correctAnswer: ["0", "1"]
}, {
    question: "Which statemen correctly describes order state and order status? ",
    choices: ["State and status are independent properties of the order", "The status is a child of the state", "State represents the general state of the order, while status workd on the item level", "An order doesn't have a status, only a state. Status is a property of an invoice, shipment, and credit memo"],
    correctAnswer: ["1"]
}, {question: "What is the difference in the effect of calling the invoice capture() method versus teh invoice pay() method? ",
choices: ["No difference: pay() will always call capture()", "Pay() will trigger the payment and capture() will not", "Capture() will trigger the payment and pay() will not", "The difference is determined by the payment method implementation"],
correctAnswer: ["2"]
}, {
    question: "Which one of the following statements is true regarding Mage_Core_Block_Text_List? ",
    choices: ["Mage_Core_Block_Text_List declares its own template for rendering, but the rendered template can be overriden via layout XML", "Child blocks of Mage_Core_Block_Text_List are always rendered alphabetically by name", "Mage_Core_Block_Text_List will always render all children automatically when it is rendered", "Mage_Core_Block_Text_List directly extends Mage_Core_Block_Template", "In order to render, the parent block of Mage_Core_Block_Text_List must always be an output block"],
    correctAnswer: ["2"]
}, {
    question: "Which of the following API calls allows you to fetch the list of related products using the native Magento API? ",
    choices: ["catalog_product_link.list, with arguments $type='related', $products_id", "catalog_product.list, with arguments $type='related', $product_id", "catalog_product_related.list, with argument $product_id", "catalog_product_option.list, with arguments $type='related', $product_id"],
    correctAnswer: ["0"]
}, {
    question: "Which of the following action will enable logging via calls to debugData() on a native Magento payment method model? ",
    choices: ["Set the protected property $_debug of the payment model to true", "Set the config node default/payment/debug/[method code] to 1", "Call Mage::register ('payment_method_debug_'.[method code], true", "Set the config node default/payment[method code]/debug to 1", "Call setDebug(true) on the payment method model"],
    correctAnswer:["3"]
}, {
    question: "Which two public methods must be implemented in a functional custom shipping method directly extending Mage_Shipping_Model_Carrier_Abstract and also implementing Mage_Shipping_Model_Carrier_Interface? (Choose two) ",
    choices: ["collectRates()", "getAllowedMethods()","isTrackingAvailable()","isFixed()", "getConfigData()","checkAvailableShipCountries()"],
    correctAnswer: ["0","1"]
}, {
    question: "Which of the following is the default setup script class name? ",
    choices: ["Mage_Core_Model_Mysql4_Setup","Mage_Core_Model_Resource_Setup_Default", "Mage_Setup_Model_Resource_Default", "Mage_Core_Model_Resource_Setup"],
    correctAnswer: ["3"],
}, {
    question: "You need to implement private sales utilizing Website Restrictions as provided by the Enterprise Edition of Magento, and when customers are not logged in, you want them to be redirected to a landing page. Where in the Magento admin would you find the settings needed for this task? ",
    choices: ["System->Confiuration->Enterprise->Website Restrictions", "System->Configuration->General->Website Restrictions","System->Manage Stores->Edit Website", "System->Permissions->Website Restrictions"],
    correctAnswer: ["1"],
}, {
    question: "Assume that PayPal has presented a new API for online purchasing that you are going to use. Which class should you extend for doing that? ",
    choices:["Mage_Sales_Model_Quote_Payment", "Mage_Payment_Model_Info","Mage_Payment_Model_Method_Abstract", "Mage_Sales_Model_Order_Payment"],
    correctAnswer:["2"]
}, {
    question: "To update your order information from a third-party-system using an XmlRpc call, you should _______. ",
    choices:["Use the native sales_orde.update /API call with teh url /api/xmlrpc/", "Create a custom API resource which allows you to receive XmlRpc requests", "Create a custom API adapte to receive XmlRpc requests", "Create a custon API handler to process XmlRpc requests"],
    correctAnswer:["0"]
}, {
    question: "Inside the XML node config/global/blocks, what is teh correct xpath for rewriting the catalog/product_view block? ",
    choices: ["catalog/rewrite/product/view", "catalog_product/rewrite/view", "catalog/product/rewrite/view","catalog/rewrite/product_view","catalog_product_view/rewrite"],
    correctAnswer: ["4"],
}, {
    question:"When the load method is called on an Eav-based data model, which of the following occurs before the load method returns? ",
    choices:["walkAttributes is used to call load on the backend model of each attribute to load its corresponding value.", "_afteLoad is called on the source model of each loaded attribute that has one", "walkAttributes is used to call afteLoad on the backend model of each loaded attribute that has one", "walkAttributes is used to iterate over each attribute and load its data from teh correct table on the database"],
    correctAnswer: ["2"],
}, {
    question: "In which of the followin integrations should you use the Magento API? ",
    choices: ["to send a SOAP request from Magento to a third-party-system", "to receive a SOAP request from a third-party-system to  Magento", "to send or receive SOAP requests in Magento", "to provide tracking on the order success page"],
    correctAnswer: ["1"]
}, {
    question: "You need to override the default value for the expiry calculation for reward point is used by teh Reward Points module. Which of the following XML fragements should you use in your modules config.xml? ",
    choices: ["default/enterprise_reward/general/expiry_calculation with a value of static", "default/enterprise_reward/general/expiry with a value of static", "default/reward_points/general/expiry_calculation with a value of static","default/enterprise_reward/expiry_calculation with a value of static"],
    correctAnswer: ["0"]
}, {
    question: "Which one of the following EAV attribute types may be used for layered navigation in native Magento? ",
    choices:["Varchar","Enum", "Option","Union"],
    correctAnswer: ["2"]
}, {
    question: "Which two of the following parameters are necessary to define a usable massaction item? ",
    choices: ["label","value", "additional", "url", "confirm"],
    correctAnswer: ["0","3"]

}, {
    question:"What happens when you edit an exsisting order using the order management page? ",
    choices: ["A form appears that allows you to edit all information on the current order", "A form appears that allows you to edit shipping information of the current order only","Depending on the order status, different editing forms appear for the current order",
    "The current order is canceled and a new order is created from scratch based on the current order's data"],
    correctAnswer:["3"],
}, {
    question: "which two of the following will return an instance of a block object? (Choose two) ",
    choices:["Mage::getBlock('page/html_header');", "Mage::app()->createBlock('page/html_header';", "Mage::createBlock('page/html_header';","Mage::app()->getLayout()->createBlock('page/html_header');","Mage::getLayout()->createBlock('page/html_header');","Mage::app()->getLayout()->createBlock('page/html_header')->setTemplate('page/html/header=phtml');"],
    correctAnswer: ["3","5"],
}, {
    question:"In which table could you find the order state? ",
    choices:["sales_flat_order", "sales_flat_order_state", "sales_flat_order_status","sales_flat_order_status_history"],
    correctAnswer:["0"]
}, {
    question:"Which two of the following methods can be used to load an entity's data from its configured data table? (choose two) ",
    choices:["$entityModel->:loadEntity($id)", "$entityModel->load($attributeValue, $attributeCode)","$entityModel->loadBy($id)","$entityModel->loadEntity($attributeCode,$attributeValue)","$entityModel->load($id)"],
    correctAnswer:["1","4"]
}, {
    question:"In order to successsfully register and configure a new entity capable of being saved and loaded from the database, you must create a model and which three of the following? (choose three) ",
    choices: ["collection class","Cofiguration settings in your module's config-xml", "An entry in Mage::$_registry","A record in the eav_entity table", "A resource model", "A table in the database that will store the entity's data"],
    correctAnswer:["1","4","5"]
}, {
    question: "Which object never encapsulates any shopping cart items? ", 
    choices: ["Mage_Checkout_Model_Cart", "Mage_Sales_Model_Quote", "Mage_Sales_Model_Quote_Address</type=shipping>","Mage_Sales_Model_Quote_Address<type-billing>"],
    correctAnswer:["1"]
}, {
    question: "Which table is used for calculating a new increment ID for an order? ",
    choices:["sales_flat_order_increment","eav_entity_store","core_increment","core_config_data"],
    correctAnswer: ["1"]
}, {
    question: "How many items will be added to the quote after adding a configurable product to the shopping cart? ",
    choices: ["The number of options", "The number of options+1", "Always 1", "Always 2"],
    correctAnswer: ["3"]
}, {
    question: "Which three of the following statments accurately describe the differences between EAV and flat catalogs when accessing child categories of a category? (Chooses three) ",
    choices: ["A different method must be used to get the child categories if flat catalog is enabled",
    "the type of the results differs between EAV and flat catalog", "Results also include children of children if flat catalog is enabled","Results contain more information for each child if flat catalog is disabled", "The children's ID's of EAV and flat tables are different"],
    correctAnswer:["0","1","3"]
}, {
    question:"Which two of the following are supported in the native Magento API? (choose two) ",
    choices:["Partial void", "Partial invoice", "Partial capture", "Partial refund", "Partial shipment"],
    correctAnswer: ["1","4"]
}, {
    question: "Which one of the following API methods exists in Magento? answer d", 
    choices: ["catalog_category.save", "catalog_product.items","catalog_product_attribute_set.update","catalog_product.info"],
    correctAnswer: ["3"],
}, {
    question: "Which module is responsible for Store Credit functionality in the native Magento? ",
    choices:["Enterprise/StoreCredit","Enterprise/CustomerBalance", "Enterprise/Sales","Enterprise/Customer"],
    correctAnswer: ["1"]
}, {
    question: "You want to implement a custom attribute source model. Which method do you have to implement after extending Mage_Eav_Model_Attribute_Source_Abstract? ",
    choices:["getOptionText()","getAHOptions()","getOptionsHash()","getOptionId()"],
    correctAnswer:["1"]
}, {
    question:"Which of these xmlelements are used in system.xml to configure a system configuration propery?(choose four) ",
    choices:["backend_model","admin_model","frontend_model","source_model","source_type","show_in_store"],
    correctAnswer:["0","2","3","5"]
}, {
    question:"How is the sort order in which total models collect their values specified? ",
    choices: ["The sort order is specified in the admin configuration under Sales>'Checkout Totals Sort Order","The sort order is specified in the system configuration under globals/sales/quote/totals/[total_code] with <before>and <after> nodes","The sort order is defined by the module loading order as specified by the children of the modules/[module_name]/depends configuration node","The sort order is specified by the collect method in each total model"],
    correctAnswer:["0"]
}, {
    question:"Which of the following allows you to save a single attribute value on an EAV entity? ",
    choices:["$model->saveAttribute($attributeCode);","$model->save(SattributeCode);","$model->getResource()->saveAttribute($model, SattributeCode);","$model->getResource()->save($model, $attributeCode);"],
    correctAnswer:["2"]
}, {
    question:"Which method is called on a shipping carrier model to fetch a list of all available shipping methods, along with the rates associated with them, for a quote address? ",
    choices:["collectShippingRates()","getAllowedMethods()","getShippingRates()","getAvailableRates()","collectRates()"],
    correctAnswer:["4"]
}, {
    question:"Which three of the following conditions should exclude a quote item from the shipping rate calculation by a carrier model? (Choose three) ",
    choices:["$quoteItem->getFreeShipping() == true","$quoteltem->getProduct()->isvirtual() == true", "$quoteltem->getweight() > 0","$quoteItem->isShipSeparately() && SquoteItem->getHasChildren()","$quoteItem()->getQty() < Mage::getStoreConfig('carriers/tablerate/min_shipping_qty')"],
    correctAnswer:["0","1","3"]
}, {
    question:"What class does an adminhtml grid directly extend?",
    choices:["Mage_Adminhtml_Block_Widget","Varien_Data_Grid","Varien_Data_Widget","Mage_Adminhtml_Block_Template"],
    correctAnswer:["0"]
}, {
    question: "For an attribute to be loaded on a catalog/product object, which two of the following conditions must be satisfied? ",
    choices:["The eav_attribute table must contain a row defining the attribute's properties and its entity type.","The attribute must have a backend model configured in the XML config.","The attribute must be part of the attribute set pertaining to the object being loaded.","There must be a record of the attribute on the catalog_product_super_atti:ibute table,","There must be a column added to the catalog_product_entity table."],
    correctAnswer:["0","2"]
}, {
    question:"You want to define a list of quote object attributes that are copied to the order object when an order is placed. Which one of the following statements is true?",
    choices: ["You can define this list by modifying the list of elements found in the configuration with the xpath global/fieldsets/sales_convert_quote.","You can define this list by modifying the list of elements found in the configuration with the xpath","global/sales/quote/item/product_attributes.","You can define this list by checking the checkbox on the attribute edit page in the admin.","You cannot modify the list of fields copied from quote to order because the process is hardcoded."],
    correctAnswer:["0"]
}, {
    question:"Which two EAV attribute frontend_input types make use of source models? ",
    choices:["Text","Textarea","Select","multiselect","Date","Gallery"],
    correctAnswer:["2","3"]
}, {
    question: "Which one of the following class types directly charges a credit card when you capture an invoice in Magento admin? ",
    choices:["order","payment","invoice","payment_method"],
    correctAnswer:["3"]
}, {
    question:"A customer has complained that his reward points sum is inaccurate. In order to debug what has happened and to discover when changes were made to his reward points, where should you look for logging information? ",
    choices:["Database table enterprise_reward_history","Database table enterprise_reward","Log file var/log/system.log","Database table enterprise_reward_log"],
    correctAnswer:["0"]
}, {
    question: "Which table stores information about the relationship between configurable products and their child products? ",
    choices: ["catalog_product_link","catalog_product_super_link","catalog_product_option","catalog_product_relation"],
    correctAnswer:["1"]
},
{
    question:"Which statement describe a model class that extends Mage_Core_Model_Abstract? ",
    choices:["The model class consists of properties and methods for storing  and manipulating data retrieved via seperate resource classes responsible for database operations.","The model class is responsible for loading the frontend layout templates and responding to page requests via its Action methods (for example, indexAction).", "The model class does not encapsulate any logic providing access to the data loaded from the database","The model class is primarily responsible for direct query operations such as retrieving and storing data and then rendering that data to the frontend view."],
    correctAnswer:["0"]
},
{
    question:"Which one of the following is responsible for sending a remote request to the payment service when capturing an order? ",
    choices:["Payment Info","Order Payment","Payment Method","Invoice"],
    correctAnswer:["2"]
},
{
    question:"Which of the following lines includes a payment method object? ",
    choices:["$quote->getShippingAddress()->setPaymentMetod(isset($data['method']? $data['method']:null); inside Mage_Checkout_Model_Type_Onepage",".public function setPayment(Mage_Sales_Model_Quote_Payment $payment) inside Mage_Sales_Model_Quote","$method = $this->getMethodInstance(); inside Mage_Sales_Model_Quote_Payment","$instance->set!nfoInstance($this); inside Mage_Payment_Model_Info"],
    correctAnswer:["2"]
},
{
    question:"Which class is extended to render a dropdown in admin forms? ",
    choices:["Mage_Adminhtml_Block_Widget","Mage_Core_Block_Abstract","Mage_Adminhtml_Block_Form_Abstract","Mage_Core_Block_Template","Varien Data Form Abstract"],
    correctAnswer:["4"]
}, 
{
    question:"Which of the following is a true statement about how Magento loads data for an Eav-based data model? answer b",
    answers:["A data helper is used in order to properly load an objects attributes from the database", "EAV-based data models use a different abstract class than other data models", "The attribute values are loaded into an attribute collection object","You must always specify each of the attributes to be loaded on the model"],
    correctAnswer:["1"]
},
{
    question:"Which class should you refer to troubleshoot Website restriction issues? ",
    choices:["Enterprise_WebsiteRestrictions_Model_Restriction","Enterprise_WebsiteRestrictions_Helper_Data","Enterprise_WebsiteRestrictions_Model_Mysql4_Restriction",
    "Enterprise_WebsiteRestrictions_Model_Observer"],
    correctAnswer:["3"]
},
{
    question:"Which of the following options would cause a poll/poll collection to load all entities that have been posted during April, 2011? ",
    choices:["$collection->addAttributeToFilter('date_posted', array('from' => '2011-04-01', 'to' => '2011-04-30') );", "$collection->addFieldToFilter('date_posted', array('from' => '2011-04-01', 'to' => '2011-04-30') );","$collection->addPostDateFilter('2011-04-01', '2011-04-30');","$collection->addFieldToSelect(('date_posted',arrayCfrom' => '2011-04-01', 'to' => '2011-04-30'));"],
    correctAnswer:["1"]
},
{
    question:"Given a grid interface that extends from Mage_Adminhtml_Block_Widget_Grid, which of the following methods could you override to allow data to be loaded from a custom data collection? ",
    choices:["_prepareDataModel","_prepareCollection","_initDataModel","_initGrid"],
    correctAnswer:["1"]
},
{
    question:"How can you make a payment method store entire credit card numbers? ",
    choices:["For security reasons, there are no native ways for doing that.","Pass the credit card number to the payment method: it will be stored automatically.","Change the protected property of payment method $_canSaveCc to true.","Configure your method to save the card number by setting 1 to the following xpath: default/payment/_NAME_/save_cc"],
    correctAnswer:["2"]
},
{
    question:"The final price for the product on the product view page is__________. ",
    choices:[" taken from the catalog_product_index_price table","taken from the catalog_product_index_price_idx table","taken from the catalog_product_index_price_final_idx table","calculated on-the-fly on php-level","pre-calculated in the products price attribute"],
    correctAnswer:["3"]
}, 
{
    question:"Which of the following items is NOT utilized in Magentos implementation of EAV-based data models? answer c",
    choices:["An entity table for storing the entities' basic information","One or more tables to store the entities' associated pieces of information","A two-column cross-link table to associate attribute values with a corresponding entity","Foreign keys on each relevant table to connect relevant pieces of information at the database level"],
    correctAnswer:["2"] 
},
{
    question:"What is the difference between the base grand total and grand totla attributes of the order?",
    choices:["base_grand_total is a grand total is the grand totla after tax is applied","base_grand_total is the grand at the moment of order submission; grand_total is the grand total at the moment of order closing","base_grand_total is the grand total in the currency of the store where the order was submitted; grand_total is in US dollars always","base_grand_total is in a base currency and grand_total is in the currency of the website where the order was submitted"],
    correctAnswer:["3"]
},
{
    question: "When the Magento configuration is being loaded, all the XML files in app/etc and the module registration files under app/etc/modules/ are loaded first. After that step, in which order are the following items loaded? 1. Configuration from the core_config_data DB table 2. app/etc/local.xml 3. The etc/config.xml of all active modules answer c" ,
    choices:["1,3,2","3,1,2","3,2,1","1,2,3"],
    correctAnswer:["2"]
},
 {   question: "Which one of the following controller classes could respond to this URL?:http://example.com/modulename/controller/index " ,
    choices:["Namespace_Module_IndexConrollet:","Namespace_ModuleName_Controller_ControllerIndex","Namespace_ModuleName_Controller_IndexController","Namespace_Modulename_ControllerController"],
    correctAnswer:["3"]
}, 
{
    question:"Which one of the following API protocols does natve Magento support? ",
    choices:["XmlRpc","REST","POST","Open Social","XQuery"],
    correctAnswer:["0"]
},
{
    question:"Which of the following accurately describes the parent class of all EAV-based resource models? ",
    choices:["Mage_Eav_Model_Mysql4_Abstract","Mage_Core_Model_Mysql4_Abstract","Mage_Eav_Model_Abstract","Mage_Eav_Model_Entity_Abstract"],
    correctAnswer:["3"]
},
{
    question:"When you register an event observer, which two of the following pieces of information are required to function? ",
    choices:["Method (or function) name","Method (or function) arguments","Class name","Object type (singleton,model,none,etc.)","Call order","Active/inactive status"],
    correctAnswer:["0,2"]
},
{    question:"What does Magento use to determine wheter the automatically run upgrade scripts have been run yet? ",
    choices:["The modification date on the modules etc/config.xml file","The version number (or loack thereof) stored in the core_module_version table","The version number (or lack thereof) stored in teh core_resource table","A comparison of the resources that are capable of successfully loading"],
    correctAnswer:["2"]
},
{
    question:"Which one of the following classes must you extend in order to implement a custom indexer? ",
    choices:["Mage_Eav_Model_Indexet:_Abstract","Mage_Cotre_Model_Entity_Indexer_Abstract","Mage_Index_Model_Entity_Indexer_Abstract","Mage_Index_Indexer_Abstract"],
    correctAnswer:["3"]
},
{
    question:"Custom widgets must _________  ",
    choices:["Extend Varien_Object","Extend Mage_core_Block_Abstract","Extend Mage_Core_Block_Template","Implement Mage_Widget_Block_Interface","Implement Mage_Widget_Block_Interface and extend Mage_Core_Block_Abstract"],
    correctAnswer:["3"]
},
{
    question:"Which method is reponsible for a full re-index in the abstract Magento indexer? ",
    choices:["fullReindex()","reindexAH()","processEven()","reindex()"],
    correctAnswer:["1"]
},
{
    question:"What can you do in orde to render a picture in a specific cell in a grid? ",
    choices:["Create a custom cell renderer by extending Mage_Adminhtml_Block_Widget_Grid_Cell_Renderer_Abstract","Create a custom grid renderer by extending Mage_Adminhtml_Block_Widget_Grid_Renderer_Abstract","Create a custom column renderer by extending Mage_Adminhtml_Block_Widget_Grid_Column_Render_Abstract","Create a custom row render by extending Mage_Adminhtml_Blocl_Widget_Grid_Row_Renderer_Abstract"],
    correctAnswer:["2"]
},
{
    question:"Which file path correctly identifies the location of a module's install/upgradescripts inside the primary module directory? answer a",
    choices:["sql/<setup_resource_name>/","var/scripts/","scripts/","<setup_resource_name>/"],
    correctAnswer:["0"]
},
{
    question:"You want to filter a product collection so that it will return only SKUs 12 and 123. You will use a call to $collection->addFieldToFilter('sku', ______________ ); Two of the following arrays could be used to complete that call correctly. Which two? (Choose two) answers b d",
    choices:["array('sku' => 12, 'sku' => 123)","array(array('eq' => 12), array('eq' => 123))","array(12 => true, 123 => true)","array(12, 123)","array(array('int' => 12), array('int' => 123))"],
    correctAnswer:["1,3"]
},
{
    question:"Which of the following elements does NOT exist in system configuration xml (system, xml file)? answer d",
    choices:["frontend_type","frontend_class","frontend_model","frontend_block"],
    correctAnswer:["3"]
},
{
    question:"To register a new API resource, what should you do? ",
    choices:["Register your new resource in config.xml in the node global/api/ [module name]/resources.","Create etc/api.xml and register your resource in the api/resources node.","Go to the System/Web services/API Resources management page, and add a new resource from there","Create an etc/resources.xml config file and register your resource in the api/resources node."],
    correctAnswer:["1"]
},
{

question:"You need to create a new condition rule type. Which two of the following classes would be suitable candidates for extending? (Choose two) answer a c",
choices:["Mage_CatalogRule_Model_Rule_Condition_Product",
"Enterprise_CatalogRule_Model_Rule_Condition_Product",
"Enterprise_TargetRule_Model_Rule_Condition_Product_Attributes","Mage_TargetRule_Model_Rule_Condition_Product_Attributes",
"Enterprise_TargetRule_Model_Rule_Condition_Rule"],
correctAnswer:["0","2"]
},
{
    question:"Which one of the following statements is true regarding layout update handles? answer d",
choice:["Layout update handles must always match a module_controller_action pattern such as catalog_product_view.",
"There may never be more than one layout update handle per request.",
"Layout update handles are declared at any level of the layout XML hierarchy.",
"A layout update handle may be specified as a string argument when calling loadLayout ()"],
correctAnswer:["3"]
},
{
    question:"Which model is responsible for calculting the taxes for the selected shipping rate?",
    choices:["shiping/rate_result","shipping/total_tax"
,"tax/sales_total_quote_tax","the concrete shipping carrier model implementation","shipping/rate_request"],
correctAnswer:["2"]
},
{
question:"Assume you added a product with custom options to the shopping cart. Where will the data for the custom options be stored persistently?",
choices:["A. in the sales_flat_quote table, as a serialized string in a text field",
"B. in the session, as a serialized array",
"C. in a separate table, sales_flat_quote_item_option",
"D. Magento doesn't store persistent data about custom options; only the new price and new SKU are stored."],
correctAnswer:["2"]
}

];