
const Main = imports.ui.main;

function enable() { Main.panel.statusArea.aggregateMenu._system._altSwitcher.actor.destroy(); }

function disable() { Main.panel.statusArea.aggregateMenu._system._altSwitcher.actor.show(); }

