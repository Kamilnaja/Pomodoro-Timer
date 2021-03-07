alter table pomodoros add column tag_id integer REFERENCES tags(id);
dodać tabelę 