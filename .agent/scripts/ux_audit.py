import os
import csv
import re

def run_ux_audit(directory_path, guidelines_csv):
    findings = []
    with open(guidelines_csv, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        guidelines = list(reader)

    # Örnek Denetimler (Daha fazlası eklenebilir)
    # 1. Smooth Scroll (CSS)
    # 2. Touch Target Size (Tailwind class checks)
    # 3. Accessibility Labels (ARIA)

    for root, dirs, files in os.walk(directory_path):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.next' in dirs:
            dirs.remove('.next')
            
        for file in files:
            file_path = os.path.join(root, file)
            
            if file.endswith(('.tsx', '.ts', '.css', '.html')):
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    
                    # Guideline Denetimi Örnekleri
                    # Rule 1: Smooth Scroll Check
                    if file.endswith('.css'):
                        if 'scroll-behavior: smooth' not in content and 'Navigation' in str([g['Category'] for g in guidelines if g['No'] == '1']):
                            findings.append({
                                'File': file_path,
                                'Issue': 'Missing Smooth Scroll',
                                'Severity': 'High',
                                'Suggestion': 'Add "scroll-behavior: smooth" to html element.'
                            })

                    # Rule 43: ARIA Labels for buttons
                    if file.endswith('.tsx'):
                        # Basit bir regex ile icon-only button tespiti (placeholder)
                        if '<button' in content and 'aria-label' not in content and '<Icon' in content:
                           findings.append({
                                'File': file_path,
                                'Issue': 'Missing Aria Label',
                                'Severity': 'High',
                                'Suggestion': 'Add aria-label to icon-only buttons.'
                            })
                            
                    # Rule 54: Input Labels
                    if file.endswith('.tsx') and '<input' in content:
                        if '<label' not in content and 'placeholder' in content:
                            findings.append({
                                'File': file_path,
                                'Issue': 'Placeholder used as only Label',
                                'Severity': 'High',
                                'Suggestion': 'Add a visible <label> for the input field.'
                            })

    return findings

if __name__ == "__main__":
    project_root = os.getcwd()
    csv_path = r"c:\dev\antigravity-kit\.agent\.shared\ui-ux-pro-max\data\ux-guidelines.csv"
    
    print(f"🚀 DevTalk UX Audit Başlatılıyor...\n🔍 Kaynak: {csv_path}\n")
    
    audit_results = run_ux_audit(project_root, csv_path)
    
    if not audit_results:
        print("✅ Harika! Kritik bir UX ihlali bulunamadı.")
    else:
        print(f"⚠️ {len(audit_results)} adet UX iyileştirme fırsatı bulundu:\n")
        for res in audit_results:
            print(f"[{res['Severity']}] {res['Issue']}")
            print(f"   Dosya: {res['File']}")
            print(f"   Öneri: {res['Suggestion']}\n")
