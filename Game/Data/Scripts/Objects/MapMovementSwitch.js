script.attachEvent(DIM3_EVENT_CONSTRUCT,'OnConstruct');script.attachEvent(DIM3_EVENT_CLICK,'OnClick');function OnConstruct(object, subevent, id, tick){	object.model.on=false;		object.setting.suspend=true;	object.model.light.on=false;	object.model.halo.on=false;	object.model.shadow.on=false;	object.setting.damage=false;	object.setting.invincible=true;	object.setting.clickable=true;	object.size.clickDistance=5000;	object.size.x=200;	object.size.z=200;	object.size.y=200;}function OnClick(object, subevent, id, tick){	map.movement.start(object.setting.getParameter(0));		object.setting.clickable=false;}