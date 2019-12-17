function enable() { imports.ui.main.panel.statusArea.aggregateMenu._system._altSwitcher.actor.destroy(); }

/* when you turnoff this extension, "gnome-shell" restart is required to bring the PowerOff Action button back. */

/* This below function is a workaround to restart the gnome-shell but no proper documentation. So I am in Doubt and thus commented out. */

/* function disable() { global.reexec_self(); } */

function disable() { imports.misc.util.spawnCommandLine("zenity --no-wrap --info --text='Plz restart gnome-shell to bring back Poweroff Action Button by [Alt+F2 r Enter] method.'"); }

