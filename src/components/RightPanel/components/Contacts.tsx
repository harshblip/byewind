import { CONTACTS } from "../../../mock/ActivitiesData";

export default function Contacts() {
  return (
    <>
      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:bg-[#1C1C1C] dark:text-white mb-4">Contacts</h3>
        <div className="space-y-4">
          {CONTACTS.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-1 -mx-1 rounded-lg transition-colors cursor-pointer"
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-700 dark:text-white">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
