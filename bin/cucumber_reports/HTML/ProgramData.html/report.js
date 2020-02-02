$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/US950872_ProgramData_B.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Gaurav Singh"
    }
  ],
  "line": 2,
  "name": "IGE - Create configuration for Program Data B and process the data till production tables",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate MAPS Configuration for Program Data \u003cProgram_Name\u003e with Not NULL data for Group Type \u003cGroup_Type\u003e",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \u003cGroup_Type\u003e with values for Program data \u003cProgram_Name\u003e as \u003cin_Network_Text_Value\u003e and \u003cnot_In_Network_TextValue\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \u003cGroup_Type\u003e and COSMOS load is required \u003cCOSMOS_Required\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \u003cColumn_Name\u003e with value \u003cUnified_INN\u003e and \u003cColumn_Name\u003e with value \u003cUnified_OON\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \u003cTableName\u003e in \u003cColumn_Name\u003e as \u003cUnified_INN\u003e for tag in_Network_Text_Value",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \u003cTableName\u003e in \u003cColumn_Name\u003e as \u003cUnified_OON\u003e for tag not_In_Network_TextValue",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;",
  "rows": [
    {
      "cells": [
        "Group_Type",
        "Program_Name",
        "in_Network_Text_Value",
        "not_In_Network_TextValue",
        "Column_Name",
        "Unified_INN",
        "Unified_OON",
        "COSMOS_Required",
        "TableName"
      ],
      "line": 13,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;1"
    },
    {
      "cells": [
        "\"MA\"",
        "\"Group Retiree Case Management\"",
        "\"Included\"",
        "\"Not Included\"",
        "\"PersonalHealthManagement\"",
        "\"1\"",
        "\"2\"",
        "\"Y\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 14,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;2"
    },
    {
      "cells": [
        "\"MA\"",
        "\"Advanced Illness Care Management\"",
        "\"Included\"",
        "\"Not Included\"",
        "\"AdvancedIllnessCare\"",
        "\"1\"",
        "\"2\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 15,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;3"
    },
    {
      "cells": [
        "\"MA\"",
        "\"Preferred Diabetic Supply Program\"",
        "\"Not Included\"",
        "\"Not Included\"",
        "\"PreferredDiabeticSupplyProgram\"",
        "\"2\"",
        "\"2\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 16,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;4"
    },
    {
      "cells": [
        "\"MA\"",
        "\"Hi Health Discount Program\"",
        "\"Included\"",
        "\"Included\"",
        "\"HealthDiscount\"",
        "\"1\"",
        "\"1\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 17,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;5"
    },
    {
      "cells": [
        "\"MA\"",
        "\"HouseCalls Program\"",
        "\"Included\"",
        "\"Included\"",
        "\"ApprovedforHouseCalls\"",
        "\"1\"",
        "\"1\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 18,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;6"
    },
    {
      "cells": [
        "\"MAPD\"",
        "\"Group Retiree Case Management\"",
        "\"Included\"",
        "\"Included\"",
        "\"PersonalHealthManagement\"",
        "\"1\"",
        "\"1\"",
        "\"Y\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 19,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;7"
    },
    {
      "cells": [
        "\"MAPD\"",
        "\"Advanced Illness Care Management\"",
        "\"Not Included\"",
        "\"Not Included\"",
        "\"AdvancedIllnessCare\"",
        "\"2\"",
        "\"2\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 20,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;8"
    },
    {
      "cells": [
        "\"MAPD\"",
        "\"Preferred Diabetic Supply Program\"",
        "\"Included\"",
        "\"Not Included\"",
        "\"PreferredDiabeticSupplyProgram\"",
        "\"1\"",
        "\"2\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 21,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;9"
    },
    {
      "cells": [
        "\"SSUP\"",
        "\"Hi Health Discount Program\"",
        "\"Included\"",
        "\"Included\"",
        "\"HealthDiscount\"",
        "\"1\"",
        "\"1\"",
        "\"Y\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 22,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;10"
    },
    {
      "cells": [
        "\"SSUP\"",
        "\"HouseCalls Program\"",
        "\"Included\"",
        "\"Included\"",
        "\"ApprovedforHouseCalls\"",
        "\"1\"",
        "\"1\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 23,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9616938182,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate MAPS Configuration for Program Data \"Group Retiree Case Management\" with Not NULL data for Group Type \"MA\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"MA\" with values for Program data \"Group Retiree Case Management\" as \"Included\" and \"Not Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MA\" and COSMOS load is required \"Y\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"PersonalHealthManagement\" with value \"1\" and \"PersonalHealthManagement\" with value \"2\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"1\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"2\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 38
    },
    {
      "val": "Group Retiree Case Management",
      "offset": 72
    },
    {
      "val": "Included",
      "offset": 107
    },
    {
      "val": "Not Included",
      "offset": 122
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12434570320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 84
    },
    {
      "val": "Y",
      "offset": 117
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 96952647196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PersonalHealthManagement",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 81
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 89
    },
    {
      "val": "2",
      "offset": 127
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1152757386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 24171515049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23984600123,
  "status": "passed"
});
formatter.after({
  "duration": 1955407679,
  "status": "passed"
});
formatter.before({
  "duration": 9539440363,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate MAPS Configuration for Program Data \"Advanced Illness Care Management\" with Not NULL data for Group Type \"MA\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"MA\" with values for Program data \"Advanced Illness Care Management\" as \"Included\" and \"Not Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MA\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"AdvancedIllnessCare\" with value \"1\" and \"AdvancedIllnessCare\" with value \"2\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"AdvancedIllnessCare\" as \"1\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"AdvancedIllnessCare\" as \"2\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 38
    },
    {
      "val": "Advanced Illness Care Management",
      "offset": 72
    },
    {
      "val": "Included",
      "offset": 110
    },
    {
      "val": "Not Included",
      "offset": 125
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12176935917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 117
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 53920778777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdvancedIllnessCare",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 76
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 84
    },
    {
      "val": "2",
      "offset": 117
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1015703862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 90
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23916760508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 90
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23907457570,
  "status": "passed"
});
formatter.after({
  "duration": 1735199172,
  "status": "passed"
});
formatter.before({
  "duration": 8779478072,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate MAPS Configuration for Program Data \"Preferred Diabetic Supply Program\" with Not NULL data for Group Type \"MA\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"MA\" with values for Program data \"Preferred Diabetic Supply Program\" as \"Not Included\" and \"Not Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MA\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"PreferredDiabeticSupplyProgram\" with value \"2\" and \"PreferredDiabeticSupplyProgram\" with value \"2\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PreferredDiabeticSupplyProgram\" as \"2\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PreferredDiabeticSupplyProgram\" as \"2\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 38
    },
    {
      "val": "Preferred Diabetic Supply Program",
      "offset": 72
    },
    {
      "val": "Not Included",
      "offset": 111
    },
    {
      "val": "Not Included",
      "offset": 130
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12501753967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 117
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 53985368497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 43
    },
    {
      "val": "2",
      "offset": 87
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 95
    },
    {
      "val": "2",
      "offset": 139
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1007819932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 101
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 24123227316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 101
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 24029168241,
  "status": "passed"
});
formatter.after({
  "duration": 1550263229,
  "status": "passed"
});
formatter.before({
  "duration": 10174953654,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate MAPS Configuration for Program Data \"Hi Health Discount Program\" with Not NULL data for Group Type \"MA\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"MA\" with values for Program data \"Hi Health Discount Program\" as \"Included\" and \"Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MA\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"HealthDiscount\" with value \"1\" and \"HealthDiscount\" with value \"1\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"HealthDiscount\" as \"1\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"HealthDiscount\" as \"1\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 38
    },
    {
      "val": "Hi Health Discount Program",
      "offset": 72
    },
    {
      "val": "Included",
      "offset": 104
    },
    {
      "val": "Included",
      "offset": 119
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12360328961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 117
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 54170613759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HealthDiscount",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 71
    },
    {
      "val": "HealthDiscount",
      "offset": 79
    },
    {
      "val": "1",
      "offset": 107
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1086761784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "HealthDiscount",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 85
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23936528175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "HealthDiscount",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 85
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 24020161083,
  "status": "passed"
});
formatter.after({
  "duration": 1852402982,
  "status": "passed"
});
formatter.before({
  "duration": 10640399209,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate MAPS Configuration for Program Data \"HouseCalls Program\" with Not NULL data for Group Type \"MA\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"MA\" with values for Program data \"HouseCalls Program\" as \"Included\" and \"Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MA\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"ApprovedforHouseCalls\" with value \"1\" and \"ApprovedforHouseCalls\" with value \"1\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"ApprovedforHouseCalls\" as \"1\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"ApprovedforHouseCalls\" as \"1\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 38
    },
    {
      "val": "HouseCalls Program",
      "offset": 72
    },
    {
      "val": "Included",
      "offset": 96
    },
    {
      "val": "Included",
      "offset": 111
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12480794563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 117
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 54517866014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ApprovedforHouseCalls",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 78
    },
    {
      "val": "ApprovedforHouseCalls",
      "offset": 86
    },
    {
      "val": "1",
      "offset": 121
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1086185402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "ApprovedforHouseCalls",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 92
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 24080539313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "ApprovedforHouseCalls",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 92
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23873651193,
  "status": "passed"
});
formatter.after({
  "duration": 1667476474,
  "status": "passed"
});
formatter.before({
  "duration": 8712799016,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate MAPS Configuration for Program Data \"Group Retiree Case Management\" with Not NULL data for Group Type \"MAPD\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"MAPD\" with values for Program data \"Group Retiree Case Management\" as \"Included\" and \"Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MAPD\" and COSMOS load is required \"Y\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"PersonalHealthManagement\" with value \"1\" and \"PersonalHealthManagement\" with value \"1\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"1\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"1\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD",
      "offset": 38
    },
    {
      "val": "Group Retiree Case Management",
      "offset": 74
    },
    {
      "val": "Included",
      "offset": 109
    },
    {
      "val": "Included",
      "offset": 124
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12676877459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD",
      "offset": 84
    },
    {
      "val": "Y",
      "offset": 119
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 126787553993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PersonalHealthManagement",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 81
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 89
    },
    {
      "val": "1",
      "offset": 127
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1328698889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23876208198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23834827620,
  "status": "passed"
});
formatter.after({
  "duration": 1924996421,
  "status": "passed"
});
formatter.before({
  "duration": 11217596529,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate MAPS Configuration for Program Data \"Advanced Illness Care Management\" with Not NULL data for Group Type \"MAPD\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"MAPD\" with values for Program data \"Advanced Illness Care Management\" as \"Not Included\" and \"Not Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MAPD\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"AdvancedIllnessCare\" with value \"2\" and \"AdvancedIllnessCare\" with value \"2\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"AdvancedIllnessCare\" as \"2\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"AdvancedIllnessCare\" as \"2\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD",
      "offset": 38
    },
    {
      "val": "Advanced Illness Care Management",
      "offset": 74
    },
    {
      "val": "Not Included",
      "offset": 112
    },
    {
      "val": "Not Included",
      "offset": 131
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12849501789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 119
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 83404650115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdvancedIllnessCare",
      "offset": 43
    },
    {
      "val": "2",
      "offset": 76
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 84
    },
    {
      "val": "2",
      "offset": 117
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1365318259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 90
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23862891094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 90
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23871762463,
  "status": "passed"
});
formatter.after({
  "duration": 1630469020,
  "status": "passed"
});
formatter.before({
  "duration": 8235841807,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate MAPS Configuration for Program Data \"Preferred Diabetic Supply Program\" with Not NULL data for Group Type \"MAPD\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"MAPD\" with values for Program data \"Preferred Diabetic Supply Program\" as \"Included\" and \"Not Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MAPD\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"PreferredDiabeticSupplyProgram\" with value \"1\" and \"PreferredDiabeticSupplyProgram\" with value \"2\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PreferredDiabeticSupplyProgram\" as \"1\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PreferredDiabeticSupplyProgram\" as \"2\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD",
      "offset": 38
    },
    {
      "val": "Preferred Diabetic Supply Program",
      "offset": 74
    },
    {
      "val": "Included",
      "offset": 113
    },
    {
      "val": "Not Included",
      "offset": 128
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12318211598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 119
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 91285011140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 87
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 95
    },
    {
      "val": "2",
      "offset": 139
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1868975315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 101
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 24087014490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 101
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23973444967,
  "status": "passed"
});
formatter.after({
  "duration": 1745201974,
  "status": "passed"
});
formatter.before({
  "duration": 9688271784,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate MAPS Configuration for Program Data \"Hi Health Discount Program\" with Not NULL data for Group Type \"SSUP\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"SSUP\" with values for Program data \"Hi Health Discount Program\" as \"Included\" and \"Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"SSUP\" and COSMOS load is required \"Y\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"HealthDiscount\" with value \"1\" and \"HealthDiscount\" with value \"1\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"HealthDiscount\" as \"1\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"HealthDiscount\" as \"1\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "SSUP",
      "offset": 38
    },
    {
      "val": "Hi Health Discount Program",
      "offset": 74
    },
    {
      "val": "Included",
      "offset": 106
    },
    {
      "val": "Included",
      "offset": 121
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12397986230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SSUP",
      "offset": 84
    },
    {
      "val": "Y",
      "offset": 119
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 97111469111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HealthDiscount",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 71
    },
    {
      "val": "HealthDiscount",
      "offset": 79
    },
    {
      "val": "1",
      "offset": 107
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1095302092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "HealthDiscount",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 85
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23854854146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "HealthDiscount",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 85
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23846105849,
  "status": "passed"
});
formatter.after({
  "duration": 1807244534,
  "status": "passed"
});
formatter.before({
  "duration": 9618937675,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate MAPS Configuration for Program Data \"HouseCalls Program\" with Not NULL data for Group Type \"SSUP\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-not-null-data-for-group-type-\u003cgroup-type\u003e;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "JSON file is received for group type \"SSUP\" with values for Program data \"HouseCalls Program\" as \"Included\" and \"Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"SSUP\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Section for Program should be created for \"ApprovedforHouseCalls\" with value \"1\" and \"ApprovedforHouseCalls\" with value \"1\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"ApprovedforHouseCalls\" as \"1\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"ApprovedforHouseCalls\" as \"1\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "SSUP",
      "offset": 38
    },
    {
      "val": "HouseCalls Program",
      "offset": 74
    },
    {
      "val": "Included",
      "offset": 98
    },
    {
      "val": "Included",
      "offset": 113
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12071609691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SSUP",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 119
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 56051907663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ApprovedforHouseCalls",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 78
    },
    {
      "val": "ApprovedforHouseCalls",
      "offset": 86
    },
    {
      "val": "1",
      "offset": 121
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 953888162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "ApprovedforHouseCalls",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 92
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23900824043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "ApprovedforHouseCalls",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 92
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23994849888,
  "status": "passed"
});
formatter.after({
  "duration": 1697061515,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Validate MAPS Configuration for Program Data \u003cProgram_Name\u003e with NULL data for Group Type \u003cGroup_Type\u003e",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "JSON file is received for group type \u003cGroup_Type\u003e with values for Program data \u003cProgram_Name\u003e as \u003cin_Network_Text_Value\u003e and \u003cnot_In_Network_TextValue\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \u003cGroup_Type\u003e and COSMOS load is required \u003cCOSMOS_Required\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Section for Program should not be created for \u003cColumn_Name\u003e with value \u003cUnified_INN\u003e and \u003cColumn_Name\u003e with value \u003cUnified_OON\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Data is loaded to production table \u003cTableName\u003e in \u003cColumn_Name\u003e as \u003cUnified_INN\u003e for tag in_Network_Text_Value",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Data is loaded to production table \u003cTableName\u003e in \u003cColumn_Name\u003e as \u003cUnified_OON\u003e for tag not_In_Network_TextValue",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;",
  "rows": [
    {
      "cells": [
        "Group_Type",
        "Program_Name",
        "in_Network_Text_Value",
        "not_In_Network_TextValue",
        "Column_Name",
        "Unified_INN",
        "Unified_OON",
        "COSMOS_Required",
        "TableName"
      ],
      "line": 34,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;1"
    },
    {
      "cells": [
        "\"MA_NULL\"",
        "\"Group Retiree Case Management\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"PersonalHealthManagement\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"Y\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 35,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;2"
    },
    {
      "cells": [
        "\"MA_NULL\"",
        "\"Advanced Illness Care Management\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"AdvancedIllnessCare\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 36,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;3"
    },
    {
      "cells": [
        "\"MAPD_NULL\"",
        "\"Preferred Diabetic Supply Program\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"PreferredDiabeticSupplyProgram\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"Y\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 37,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;4"
    },
    {
      "cells": [
        "\"MAPD_NULL\"",
        "\"Hi Health Discount Program\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"HealthDiscount\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 38,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;5"
    },
    {
      "cells": [
        "\"SSUP_NULL\"",
        "\"Group Retiree Case Management\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"PersonalHealthManagement\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"Y\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 39,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10250331368,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validate MAPS Configuration for Program Data \"Group Retiree Case Management\" with NULL data for Group Type \"MA_NULL\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "JSON file is received for group type \"MA_NULL\" with values for Program data \"Group Retiree Case Management\" as \"NULL\" and \"NULL\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MA_NULL\" and COSMOS load is required \"Y\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Section for Program should not be created for \"PersonalHealthManagement\" with value \"NULL\" and \"PersonalHealthManagement\" with value \"NULL\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"NULL\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"NULL\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MA_NULL",
      "offset": 38
    },
    {
      "val": "Group Retiree Case Management",
      "offset": 77
    },
    {
      "val": "NULL",
      "offset": 112
    },
    {
      "val": "NULL",
      "offset": 123
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 16261673593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA_NULL",
      "offset": 84
    },
    {
      "val": "Y",
      "offset": 122
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 93449799538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PersonalHealthManagement",
      "offset": 47
    },
    {
      "val": "NULL",
      "offset": 85
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 96
    },
    {
      "val": "NULL",
      "offset": 134
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_not_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 999383004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23862530496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 20842756266,
  "status": "passed"
});
formatter.after({
  "duration": 1838664155,
  "status": "passed"
});
formatter.before({
  "duration": 8405864416,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Validate MAPS Configuration for Program Data \"Advanced Illness Care Management\" with NULL data for Group Type \"MA_NULL\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "JSON file is received for group type \"MA_NULL\" with values for Program data \"Advanced Illness Care Management\" as \"NULL\" and \"NULL\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MA_NULL\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Section for Program should not be created for \"AdvancedIllnessCare\" with value \"NULL\" and \"AdvancedIllnessCare\" with value \"NULL\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"AdvancedIllnessCare\" as \"NULL\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"AdvancedIllnessCare\" as \"NULL\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MA_NULL",
      "offset": 38
    },
    {
      "val": "Advanced Illness Care Management",
      "offset": 77
    },
    {
      "val": "NULL",
      "offset": 115
    },
    {
      "val": "NULL",
      "offset": 126
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 11835237857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA_NULL",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 122
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 52584657885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdvancedIllnessCare",
      "offset": 47
    },
    {
      "val": "NULL",
      "offset": 80
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 91
    },
    {
      "val": "NULL",
      "offset": 124
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_not_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 923501518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 90
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23983221318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 90
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 20944798137,
  "status": "passed"
});
formatter.after({
  "duration": 1716819336,
  "status": "passed"
});
formatter.before({
  "duration": 15820800396,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Validate MAPS Configuration for Program Data \"Preferred Diabetic Supply Program\" with NULL data for Group Type \"MAPD_NULL\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "JSON file is received for group type \"MAPD_NULL\" with values for Program data \"Preferred Diabetic Supply Program\" as \"NULL\" and \"NULL\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MAPD_NULL\" and COSMOS load is required \"Y\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Section for Program should not be created for \"PreferredDiabeticSupplyProgram\" with value \"NULL\" and \"PreferredDiabeticSupplyProgram\" with value \"NULL\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PreferredDiabeticSupplyProgram\" as \"NULL\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PreferredDiabeticSupplyProgram\" as \"NULL\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_NULL",
      "offset": 38
    },
    {
      "val": "Preferred Diabetic Supply Program",
      "offset": 79
    },
    {
      "val": "NULL",
      "offset": 118
    },
    {
      "val": "NULL",
      "offset": 129
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12086450004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_NULL",
      "offset": 84
    },
    {
      "val": "Y",
      "offset": 124
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 124855650005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 47
    },
    {
      "val": "NULL",
      "offset": 91
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 102
    },
    {
      "val": "NULL",
      "offset": 146
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_not_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1094866010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 101
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23941798075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 101
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23873119116,
  "status": "passed"
});
formatter.after({
  "duration": 1780666528,
  "status": "passed"
});
formatter.before({
  "duration": 9895821206,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Validate MAPS Configuration for Program Data \"Hi Health Discount Program\" with NULL data for Group Type \"MAPD_NULL\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "JSON file is received for group type \"MAPD_NULL\" with values for Program data \"Hi Health Discount Program\" as \"NULL\" and \"NULL\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MAPD_NULL\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Section for Program should not be created for \"HealthDiscount\" with value \"NULL\" and \"HealthDiscount\" with value \"NULL\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"HealthDiscount\" as \"NULL\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"HealthDiscount\" as \"NULL\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_NULL",
      "offset": 38
    },
    {
      "val": "Hi Health Discount Program",
      "offset": 79
    },
    {
      "val": "NULL",
      "offset": 111
    },
    {
      "val": "NULL",
      "offset": 122
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12919360179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_NULL",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 124
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 83701202855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HealthDiscount",
      "offset": 47
    },
    {
      "val": "NULL",
      "offset": 75
    },
    {
      "val": "HealthDiscount",
      "offset": 86
    },
    {
      "val": "NULL",
      "offset": 114
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_not_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 2179784191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "HealthDiscount",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 85
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23880256004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "HealthDiscount",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 85
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23865039504,
  "status": "passed"
});
formatter.after({
  "duration": 1860849346,
  "status": "passed"
});
formatter.before({
  "duration": 8620506831,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Validate MAPS Configuration for Program Data \"Group Retiree Case Management\" with NULL data for Group Type \"SSUP_NULL\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-null-data-for-group-type-\u003cgroup-type\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "JSON file is received for group type \"SSUP_NULL\" with values for Program data \"Group Retiree Case Management\" as \"NULL\" and \"NULL\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"SSUP_NULL\" and COSMOS load is required \"Y\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Section for Program should not be created for \"PersonalHealthManagement\" with value \"NULL\" and \"PersonalHealthManagement\" with value \"NULL\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"NULL\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"NULL\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "SSUP_NULL",
      "offset": 38
    },
    {
      "val": "Group Retiree Case Management",
      "offset": 79
    },
    {
      "val": "NULL",
      "offset": 114
    },
    {
      "val": "NULL",
      "offset": 125
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12697511545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SSUP_NULL",
      "offset": 84
    },
    {
      "val": "Y",
      "offset": 124
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 88845358397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PersonalHealthManagement",
      "offset": 47
    },
    {
      "val": "NULL",
      "offset": 85
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 96
    },
    {
      "val": "NULL",
      "offset": 134
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_not_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1048458392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23837506877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23836882906,
  "status": "passed"
});
formatter.after({
  "duration": 1894053086,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Validate MAPS Configuration for Program Data \u003cProgram_Name\u003e with Update data for Group Type \u003cGroup_Type\u003e",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "JSON file is received for group type \u003cGroup_Type\u003e with values for Program data \u003cProgram_Name\u003e as \u003cin_Network_Text_Value\u003e and \u003cnot_In_Network_TextValue\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \u003cGroup_Type\u003e and COSMOS load is required \u003cCOSMOS_Required\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Section for Program should be created for \u003cColumn_Name\u003e with value \u003cUnified_INN\u003e and \u003cColumn_Name\u003e with value \u003cUnified_OON\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Data is loaded to production table \u003cTableName\u003e in \u003cColumn_Name\u003e as \u003cUnified_INN\u003e for tag in_Network_Text_Value",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Data is loaded to production table \u003cTableName\u003e in \u003cColumn_Name\u003e as \u003cUnified_OON\u003e for tag not_In_Network_TextValue",
  "keyword": "And "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;",
  "rows": [
    {
      "cells": [
        "Group_Type",
        "Program_Name",
        "in_Network_Text_Value",
        "not_In_Network_TextValue",
        "Column_Name",
        "Unified_INN",
        "Unified_OON",
        "COSMOS_Required",
        "TableName"
      ],
      "line": 50,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;1"
    },
    {
      "cells": [
        "\"MA_Update\"",
        "\"Group Retiree Case Management\"",
        "\"Not Included\"",
        "\"Included\"",
        "\"PersonalHealthManagement\"",
        "\"2\"",
        "\"1\"",
        "\"Y\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 51,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;2"
    },
    {
      "cells": [
        "\"MA_Update\"",
        "\"Advanced Illness Care Management\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"AdvancedIllnessCare\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 52,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;3"
    },
    {
      "cells": [
        "\"MAPD_Update\"",
        "\"Preferred Diabetic Supply Program\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"PreferredDiabeticSupplyProgram\"",
        "\"NULL\"",
        "\"NULL\"",
        "\"Y\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 53,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;4"
    },
    {
      "cells": [
        "\"MAPD_Update\"",
        "\"Hi Health Discount Program\"",
        "\"Not Included\"",
        "\"Included\"",
        "\"HealthDiscount\"",
        "\"2\"",
        "\"1\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 54,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;5"
    },
    {
      "cells": [
        "\"MAPD_Update\"",
        "\"HouseCalls Program\"",
        "\"Included\"",
        "\"Not Included\"",
        "\"ApprovedforHouseCalls\"",
        "\"1\"",
        "\"2\"",
        "\"N\"",
        "\"EmployerGroupIndicators\""
      ],
      "line": 55,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10191684337,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Validate MAPS Configuration for Program Data \"Group Retiree Case Management\" with Update data for Group Type \"MA_Update\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "JSON file is received for group type \"MA_Update\" with values for Program data \"Group Retiree Case Management\" as \"Not Included\" and \"Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MA_Update\" and COSMOS load is required \"Y\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Section for Program should be created for \"PersonalHealthManagement\" with value \"2\" and \"PersonalHealthManagement\" with value \"1\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"2\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PersonalHealthManagement\" as \"1\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MA_Update",
      "offset": 38
    },
    {
      "val": "Group Retiree Case Management",
      "offset": 79
    },
    {
      "val": "Not Included",
      "offset": 114
    },
    {
      "val": "Included",
      "offset": 133
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 13221412552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA_Update",
      "offset": 84
    },
    {
      "val": "Y",
      "offset": 124
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 93015732168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PersonalHealthManagement",
      "offset": 43
    },
    {
      "val": "2",
      "offset": 81
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 89
    },
    {
      "val": "1",
      "offset": 127
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 963693230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23844579358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PersonalHealthManagement",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 95
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23849132164,
  "status": "passed"
});
formatter.after({
  "duration": 1585581738,
  "status": "passed"
});
formatter.before({
  "duration": 9978469547,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Validate MAPS Configuration for Program Data \"Advanced Illness Care Management\" with Update data for Group Type \"MA_Update\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "JSON file is received for group type \"MA_Update\" with values for Program data \"Advanced Illness Care Management\" as \"NULL\" and \"NULL\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MA_Update\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Section for Program should be created for \"AdvancedIllnessCare\" with value \"NULL\" and \"AdvancedIllnessCare\" with value \"NULL\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"AdvancedIllnessCare\" as \"NULL\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"AdvancedIllnessCare\" as \"NULL\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MA_Update",
      "offset": 38
    },
    {
      "val": "Advanced Illness Care Management",
      "offset": 79
    },
    {
      "val": "NULL",
      "offset": 117
    },
    {
      "val": "NULL",
      "offset": 128
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 11658132923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA_Update",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 124
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 53639711242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdvancedIllnessCare",
      "offset": 43
    },
    {
      "val": "NULL",
      "offset": 76
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 87
    },
    {
      "val": "NULL",
      "offset": 120
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1040051001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 90
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23866776446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "AdvancedIllnessCare",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 90
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23849125601,
  "status": "passed"
});
formatter.after({
  "duration": 1532626331,
  "status": "passed"
});
formatter.before({
  "duration": 9714122851,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Validate MAPS Configuration for Program Data \"Preferred Diabetic Supply Program\" with Update data for Group Type \"MAPD_Update\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "JSON file is received for group type \"MAPD_Update\" with values for Program data \"Preferred Diabetic Supply Program\" as \"NULL\" and \"NULL\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MAPD_Update\" and COSMOS load is required \"Y\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Section for Program should be created for \"PreferredDiabeticSupplyProgram\" with value \"NULL\" and \"PreferredDiabeticSupplyProgram\" with value \"NULL\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PreferredDiabeticSupplyProgram\" as \"NULL\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"PreferredDiabeticSupplyProgram\" as \"NULL\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_Update",
      "offset": 38
    },
    {
      "val": "Preferred Diabetic Supply Program",
      "offset": 81
    },
    {
      "val": "NULL",
      "offset": 120
    },
    {
      "val": "NULL",
      "offset": 131
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12179911365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_Update",
      "offset": 84
    },
    {
      "val": "Y",
      "offset": 126
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 131276419142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 43
    },
    {
      "val": "NULL",
      "offset": 87
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 98
    },
    {
      "val": "NULL",
      "offset": 142
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1225632247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 101
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23905741550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "PreferredDiabeticSupplyProgram",
      "offset": 65
    },
    {
      "val": "NULL",
      "offset": 101
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23813435417,
  "status": "passed"
});
formatter.after({
  "duration": 1745525240,
  "status": "passed"
});
formatter.before({
  "duration": 9003466090,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Validate MAPS Configuration for Program Data \"Hi Health Discount Program\" with Update data for Group Type \"MAPD_Update\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "JSON file is received for group type \"MAPD_Update\" with values for Program data \"Hi Health Discount Program\" as \"Not Included\" and \"Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MAPD_Update\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Section for Program should be created for \"HealthDiscount\" with value \"2\" and \"HealthDiscount\" with value \"1\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"HealthDiscount\" as \"2\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"HealthDiscount\" as \"1\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_Update",
      "offset": 38
    },
    {
      "val": "Hi Health Discount Program",
      "offset": 81
    },
    {
      "val": "Not Included",
      "offset": 113
    },
    {
      "val": "Included",
      "offset": 132
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12355088597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_Update",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 126
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 80731372484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HealthDiscount",
      "offset": 43
    },
    {
      "val": "2",
      "offset": 71
    },
    {
      "val": "HealthDiscount",
      "offset": 79
    },
    {
      "val": "1",
      "offset": 107
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1252117950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "HealthDiscount",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 85
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 23859629712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "HealthDiscount",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 85
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23856715390,
  "status": "passed"
});
formatter.after({
  "duration": 1567592447,
  "status": "passed"
});
formatter.before({
  "duration": 10482454791,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Validate MAPS Configuration for Program Data \"HouseCalls Program\" with Update data for Group Type \"MAPD_Update\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-update-data-for-group-type-\u003cgroup-type\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "JSON file is received for group type \"MAPD_Update\" with values for Program data \"HouseCalls Program\" as \"Included\" and \"Not Included\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "JSON file is processed successfully through MAPS Promoter processes for group type \"MAPD_Update\" and COSMOS load is required \"N\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Section for Program should be created for \"ApprovedforHouseCalls\" with value \"1\" and \"ApprovedforHouseCalls\" with value \"2\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"ApprovedforHouseCalls\" as \"1\" for tag in_Network_Text_Value",
  "matchedColumns": [
    4,
    5,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Data is loaded to production table \"EmployerGroupIndicators\" in \"ApprovedforHouseCalls\" as \"2\" for tag not_In_Network_TextValue",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_Update",
      "offset": 38
    },
    {
      "val": "HouseCalls Program",
      "offset": 81
    },
    {
      "val": "Included",
      "offset": 105
    },
    {
      "val": "Not Included",
      "offset": 120
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 11993666766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_Update",
      "offset": 84
    },
    {
      "val": "N",
      "offset": 126
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_successfully_through_MAPS_Promoter_processes_for_group_type_and_COSMOS_load_is_required(String,String)"
});
formatter.result({
  "duration": 82609172400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ApprovedforHouseCalls",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 78
    },
    {
      "val": "ApprovedforHouseCalls",
      "offset": 86
    },
    {
      "val": "2",
      "offset": 121
    }
  ],
  "location": "Steps_US950873_ProgramData_A.section_for_Program_should_be_created_for_with_value_and_with_value(String,String,String,String)"
});
formatter.result({
  "duration": 1083665728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "ApprovedforHouseCalls",
      "offset": 65
    },
    {
      "val": "1",
      "offset": 92
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_in_Network_Text_Value(String,String,String)"
});
formatter.result({
  "duration": 24045473920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EmployerGroupIndicators",
      "offset": 36
    },
    {
      "val": "ApprovedforHouseCalls",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 92
    }
  ],
  "location": "Steps_US950873_ProgramData_A.data_is_loaded_to_production_table_in_as_for_tag_not_In_Network_TextValue(String,String,String)"
});
formatter.result({
  "duration": 23891004616,
  "status": "passed"
});
formatter.after({
  "duration": 1606489863,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 58,
  "name": "Validate MAPS Configuration for Program Data \u003cProgram_Name\u003e with Invalid data for Group Type \u003cGroup_Type\u003e",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "JSON file is received for group type \u003cGroup_Type\u003e with values for Program data \u003cProgram_Name\u003e as \u003cin_Network_Text_Value\u003e and \u003cnot_In_Network_TextValue\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "JSON file is processed through converter",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Valid error message is displayed for Program Data \u003cProgram_Name\u003e as \u003cINN_Error_Message\u003e and \u003cOON_Error_Message\u003e with \u003cin_Network_Text_Value\u003e and \u003cnot_In_Network_TextValue\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;",
  "rows": [
    {
      "cells": [
        "Group_Type",
        "Program_Name",
        "in_Network_Text_Value",
        "not_In_Network_TextValue",
        "INN_Error_Message",
        "OON_Error_Message"
      ],
      "line": 64,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;1"
    },
    {
      "cells": [
        "\"MAPD_Error\"",
        "\"Group Retiree Case Management\"",
        "\"Test999\"",
        "\"Test390\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.PersonalHealthManagement_in_Network_Text_Value\u0027.\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.PersonalHealthManagement_not_In_Network_TextValue\u0027.\""
      ],
      "line": 65,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;2"
    },
    {
      "cells": [
        "\"MAPD_Error\"",
        "\"Advanced Illness Care Management\"",
        "\"Test123\"",
        "\"Test345\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.AdvancedIllnessCare_in_Network_Text_Value\u0027\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.AdvancedIllnessCare_not_In_Network_TextValue\u0027\""
      ],
      "line": 66,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;3"
    },
    {
      "cells": [
        "\"SSUP_Error\"",
        "\"Preferred Diabetic Supply Program\"",
        "\"Test123\"",
        "\"Test905\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.PreferredDiabeticSupplyProgram_in_Network_Text_Value\u0027.\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.PreferredDiabeticSupplyProgram_not_In_Network_TextValue\u0027.\""
      ],
      "line": 67,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;4"
    },
    {
      "cells": [
        "\"SSUP_Error\"",
        "\"Hi Health Discount Program\"",
        "\"Test823\"",
        "\"Test005\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.HealthDiscount_in_Network_Text_Value\u0027\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.HealthDiscount_not_In_Network_TextValue\u0027.\""
      ],
      "line": 68,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;5"
    },
    {
      "cells": [
        "\"SSUP_Error\"",
        "\"HouseCalls Program\"",
        "\"Test903\"",
        "\"Test775\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.ApprovedforHouseCalls_in_Network_Text_Value\u0027.\"",
        "\"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.ApprovedforHouseCalls_not_In_Network_TextValue\u0027.\""
      ],
      "line": 69,
      "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8238996528,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Validate MAPS Configuration for Program Data \"Group Retiree Case Management\" with Invalid data for Group Type \"MAPD_Error\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "JSON file is received for group type \"MAPD_Error\" with values for Program data \"Group Retiree Case Management\" as \"Test999\" and \"Test390\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "JSON file is processed through converter",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Valid error message is displayed for Program Data \"Group Retiree Case Management\" as \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.PersonalHealthManagement_in_Network_Text_Value\u0027.\" and \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.PersonalHealthManagement_not_In_Network_TextValue\u0027.\" with \"Test999\" and \"Test390\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_Error",
      "offset": 38
    },
    {
      "val": "Group Retiree Case Management",
      "offset": 80
    },
    {
      "val": "Test999",
      "offset": 115
    },
    {
      "val": "Test390",
      "offset": 129
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12440857608,
  "status": "passed"
});
formatter.match({
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_through_converter()"
});
formatter.result({
  "duration": 24493739993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Group Retiree Case Management",
      "offset": 51
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.PersonalHealthManagement_in_Network_Text_Value\u0027.",
      "offset": 86
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.PersonalHealthManagement_not_In_Network_TextValue\u0027.",
      "offset": 242
    },
    {
      "val": "Test999",
      "offset": 402
    },
    {
      "val": "Test390",
      "offset": 416
    }
  ],
  "location": "Steps_US950873_ProgramData_A.valid_error_message_is_displayed_for_Program_Data_as_and_with_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 5054587739,
  "status": "passed"
});
formatter.after({
  "duration": 1650719124,
  "status": "passed"
});
formatter.before({
  "duration": 8971240765,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Validate MAPS Configuration for Program Data \"Advanced Illness Care Management\" with Invalid data for Group Type \"MAPD_Error\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "JSON file is received for group type \"MAPD_Error\" with values for Program data \"Advanced Illness Care Management\" as \"Test123\" and \"Test345\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "JSON file is processed through converter",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Valid error message is displayed for Program Data \"Advanced Illness Care Management\" as \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.AdvancedIllnessCare_in_Network_Text_Value\u0027\" and \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.AdvancedIllnessCare_not_In_Network_TextValue\u0027\" with \"Test123\" and \"Test345\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MAPD_Error",
      "offset": 38
    },
    {
      "val": "Advanced Illness Care Management",
      "offset": 80
    },
    {
      "val": "Test123",
      "offset": 118
    },
    {
      "val": "Test345",
      "offset": 132
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 13295125937,
  "status": "passed"
});
formatter.match({
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_through_converter()"
});
formatter.result({
  "duration": 23450592115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Advanced Illness Care Management",
      "offset": 51
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.AdvancedIllnessCare_in_Network_Text_Value\u0027",
      "offset": 89
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.AdvancedIllnessCare_not_In_Network_TextValue\u0027",
      "offset": 239
    },
    {
      "val": "Test123",
      "offset": 393
    },
    {
      "val": "Test345",
      "offset": 407
    }
  ],
  "location": "Steps_US950873_ProgramData_A.valid_error_message_is_displayed_for_Program_Data_as_and_with_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 4994636976,
  "status": "passed"
});
formatter.after({
  "duration": 1617882137,
  "status": "passed"
});
formatter.before({
  "duration": 8798637768,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Validate MAPS Configuration for Program Data \"Preferred Diabetic Supply Program\" with Invalid data for Group Type \"SSUP_Error\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "JSON file is received for group type \"SSUP_Error\" with values for Program data \"Preferred Diabetic Supply Program\" as \"Test123\" and \"Test905\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "JSON file is processed through converter",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Valid error message is displayed for Program Data \"Preferred Diabetic Supply Program\" as \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.PreferredDiabeticSupplyProgram_in_Network_Text_Value\u0027.\" and \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.PreferredDiabeticSupplyProgram_not_In_Network_TextValue\u0027.\" with \"Test123\" and \"Test905\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SSUP_Error",
      "offset": 38
    },
    {
      "val": "Preferred Diabetic Supply Program",
      "offset": 80
    },
    {
      "val": "Test123",
      "offset": 119
    },
    {
      "val": "Test905",
      "offset": 133
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12383650918,
  "status": "passed"
});
formatter.match({
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_through_converter()"
});
formatter.result({
  "duration": 14714742308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preferred Diabetic Supply Program",
      "offset": 51
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.PreferredDiabeticSupplyProgram_in_Network_Text_Value\u0027.",
      "offset": 90
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.PreferredDiabeticSupplyProgram_not_In_Network_TextValue\u0027.",
      "offset": 252
    },
    {
      "val": "Test123",
      "offset": 418
    },
    {
      "val": "Test905",
      "offset": 432
    }
  ],
  "location": "Steps_US950873_ProgramData_A.valid_error_message_is_displayed_for_Program_Data_as_and_with_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 4916082797,
  "status": "passed"
});
formatter.after({
  "duration": 1656722118,
  "status": "passed"
});
formatter.before({
  "duration": 8339436424,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Validate MAPS Configuration for Program Data \"Hi Health Discount Program\" with Invalid data for Group Type \"SSUP_Error\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "JSON file is received for group type \"SSUP_Error\" with values for Program data \"Hi Health Discount Program\" as \"Test823\" and \"Test005\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "JSON file is processed through converter",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Valid error message is displayed for Program Data \"Hi Health Discount Program\" as \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.HealthDiscount_in_Network_Text_Value\u0027\" and \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.HealthDiscount_not_In_Network_TextValue\u0027.\" with \"Test823\" and \"Test005\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SSUP_Error",
      "offset": 38
    },
    {
      "val": "Hi Health Discount Program",
      "offset": 80
    },
    {
      "val": "Test823",
      "offset": 112
    },
    {
      "val": "Test005",
      "offset": 126
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12675092109,
  "status": "passed"
});
formatter.match({
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_through_converter()"
});
formatter.result({
  "duration": 14642320758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hi Health Discount Program",
      "offset": 51
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.HealthDiscount_in_Network_Text_Value\u0027",
      "offset": 83
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.HealthDiscount_not_In_Network_TextValue\u0027.",
      "offset": 228
    },
    {
      "val": "Test823",
      "offset": 378
    },
    {
      "val": "Test005",
      "offset": 392
    }
  ],
  "location": "Steps_US950873_ProgramData_A.valid_error_message_is_displayed_for_Program_Data_as_and_with_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 4898612046,
  "status": "passed"
});
formatter.after({
  "duration": 1815521471,
  "status": "passed"
});
formatter.before({
  "duration": 8861568491,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Validate MAPS Configuration for Program Data \"HouseCalls Program\" with Invalid data for Group Type \"SSUP_Error\"",
  "description": "",
  "id": "ige---create-configuration-for-program-data-b-and-process-the-data-till-production-tables;validate-maps-configuration-for-program-data-\u003cprogram-name\u003e-with-invalid-data-for-group-type-\u003cgroup-type\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "JSON file is received for group type \"SSUP_Error\" with values for Program data \"HouseCalls Program\" as \"Test903\" and \"Test775\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "JSON file is processed through converter",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Valid error message is displayed for Program Data \"HouseCalls Program\" as \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.ApprovedforHouseCalls_in_Network_Text_Value\u0027.\" and \"LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.ApprovedforHouseCalls_not_In_Network_TextValue\u0027.\" with \"Test903\" and \"Test775\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SSUP_Error",
      "offset": 38
    },
    {
      "val": "HouseCalls Program",
      "offset": 80
    },
    {
      "val": "Test903",
      "offset": 104
    },
    {
      "val": "Test775",
      "offset": 118
    }
  ],
  "location": "Steps_US950873_ProgramData_A.json_file_is_received_for_group_type_with_values_for_Program_data_as_and(String,String,String,String)"
});
formatter.result({
  "duration": 12131176883,
  "status": "passed"
});
formatter.match({
  "location": "Steps_US950873_ProgramData_A.json_file_is_processed_through_converter()"
});
formatter.result({
  "duration": 15268918374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HouseCalls Program",
      "offset": 51
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.INN_programs.ApprovedforHouseCalls_in_Network_Text_Value\u0027.",
      "offset": 75
    },
    {
      "val": "LookupValueInConfigTransform does not have a value to lookup for \u0027employer_Benefit_Plan.OON_programs.ApprovedforHouseCalls_not_In_Network_TextValue\u0027.",
      "offset": 228
    },
    {
      "val": "Test903",
      "offset": 385
    },
    {
      "val": "Test775",
      "offset": 399
    }
  ],
  "location": "Steps_US950873_ProgramData_A.valid_error_message_is_displayed_for_Program_Data_as_and_with_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 4826711908,
  "status": "passed"
});
formatter.after({
  "duration": 1951119065,
  "status": "passed"
});
});