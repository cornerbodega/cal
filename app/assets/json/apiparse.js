{
    login: {
        login
    },
    users: {
        user_add
        user_modify
        user_remove
    },
    employees: {
        employee_add
        employee_modify
        employee_remove
    },
    vehicles: {
        vehicle_add
        vehicle_modify
        vehicle_remove
    },
    rooms: {
        plant_room_add
        plant_room_modify
        plant_room_remove
        inventory_room_add
        inventory_room_modify
        inventory_room_remove
    },
    plants: {
        plant_new: {},
        plant_new_undo: function (plant)
        plant_move
        plant_destroy_schedule
        plant_destroy_schedule_undo
        plant_destroy
        plant_harvest_schedule
        plant_harvest_schedule_undo
        plant_harvest
        plant_waste_weigh
        plant_cure
        plant_convert_to_inventory
        plant_yield_modify
        plant_modify
    },
    inventory: {
        inventory_adjust
        inventory_adjust_usable
        inventory_destroy_schedule
        inventory_destroy
        inventory_move
        inventory_check
        inventory_new
        inventory_manifest
        inventory_manifest_pickup
        inventory_manifest_lookup
        inventory_manifest_modify
        inventory_manifest_void
        inventory_manifest_void_stop
        inventory_manifest_void_items
        inventory_transfer_lookup
        inventory_transfer_outbound
        inventory_transfer_outbound_return_lookup
        inventory_transfer_outbound_return
        inventory_transfer_outbound_modify
        inventory_transfer_outbound_void
        inventory_transfer_inbound
        inventory_transfer_inbound_modify
        inventory_create_lot
        inventory_split
        inventory_convert
        inventory_sample
        inventory_qa_sample
        inventory_qa_sample_void
        inventory_qa_sample_results
        inventory_qa_check
        inventory_qa_check_all
        inventory_modify
        inventory_convert_undo
    },
    sales: {
        sale_dispense
        sale_void
        sale_modify
        sale_refund
    },
    tax: {
        tax_obligation_file
    },
    sync: {
        nonce_replay
        sync_check
        sync_vehicle
        sync_employee
        sync_plant_room
        sync_inventory_room
        sync_inventory
        sync_plantsync_plant_derivative
        sync_manifest
        sync_inventory_transfer
        sync_inventory_transfer_inbound
        sync_sale
        sync_tax_report
        sync_inventory_adjust
        sync_inventory_qa_sample
        sync_inventory_sample
        sync_vendor
        sync_qa_lab
    }
}
