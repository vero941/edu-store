function openSection(section) {
    const content = document.getElementById('content-area');
    switch (section) {
      case 'tugas':
        content.innerHTML = '<h2>Daftar Tugas</h2><p>Belum ada tugas ditambahkan.</p>';
        break;
      case 'modul':
        content.innerHTML = '<h2>Modul Kuliah</h2><p>Belum ada modul tersedia.</p>';
        break;
      case 'catatan':
        content.innerHTML = '<h2>Catatan Kuliah</h2><p>Belum ada catatan tersedia.</p>';
        break;
      case 'jadwal':
        content.innerHTML = '<h2>Jadwal Kuliah</h2><p>Belum ada jadwal ditambahkan.</p>';
        break;
    }
  }
  