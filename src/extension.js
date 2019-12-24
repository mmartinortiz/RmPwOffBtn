const System = imports.ui.main.panel.statusArea.aggregateMenu._system;

var _powerOffItem = System._altSwitcher.actor;

function init() {}

function enable() {
  if (System._actionsItem === undefined) {
    // Gnome >= 3.33
    System.buttonGroup.remove_child(_powerOffItem);
  } else if (System._session === undefined) {
    // Gnome >= 3.26
    System._actionsItem.actor.remove_child(_powerOffItem);
  } else {
    System.buttonGroup.remove_child(_powerOffItem);
  }
}

function disable() {
  if (System._actionsItem === undefined) {
    System.buttonGroup.add_child(_powerOffItem);
  } else {
    System._actionsItem.actor.add_child(_powerOffItem);
  }
}
